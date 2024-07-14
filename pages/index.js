// pages/index.js
import {Fragment, useState} from 'react';
import {Camera} from "../camera";
import {Root, Footer, GlobalStyle, HeaderLabel, LoaderContainer, Loader} from "../styles/styles";
import NutritionalInfoDisplay from "../nutritionalInfoDisplay";


export default function Home() {
    const [response, setResponse] = useState('');
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [cardImage, setCardImage] = useState();

    const handleSubmit = async (blob) => {
        setIsLoading(true);
        const file = convertBlobToFile(blob, 'image.png')

        const res = await fetch('/api/openaiApi', {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            body: await getBase64(file),
        });


        const data = await res.json();
        const jsonText = data.result.replace(/```json|```/g, '').trim();

        let jsonObject;
        try {
            jsonObject = JSON.parse(jsonText);
            console.log(jsonObject);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
        setIsLoading(false);
        setResponse(jsonObject);
    };

    function convertBlobToFile(blob, fileName) {
        blob.lastModifiedDate = new Date();
        blob.name = fileName;
        return blob;
    }

    async function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                resolve(reader.result)
            }
            reader.onerror = reject
        })
    }

    return (
        <div>
            <HeaderLabel>Food Label Analyzer</HeaderLabel>

            <Fragment>
                <Root>
                    {isCameraOpen && (
                        <Camera
                            onCapture={blob => handleSubmit(blob)}
                            onClear={() => setCardImage(undefined)}
                        />
                    )}

                    {
                        isLoading && (
                            <LoaderContainer>
                                <Loader />
                            </LoaderContainer>
                        )
                    }

                    {response && (
                        <div className="container">
                            <h1>Nutrition Analysis</h1>
                            <NutritionalInfoDisplay data={response}/>
                        </div>
                    )}

                    <Footer>
                        <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
                        <button
                            onClick={() => {
                                setIsCameraOpen(false);
                                setCardImage(undefined);
                            }}
                        >
                            Close Camera
                        </button>
                    </Footer>
                </Root>
                <GlobalStyle/>
            </Fragment>
        </div>
    );
}
