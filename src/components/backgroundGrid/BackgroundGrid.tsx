import React, { useEffect, useState } from 'react';
import { S } from "./BackgroundGridStyle";

export const BackgroundGrid = ({height}: {height: number}) => {
    interface WindowSize {
        width: number;
        height: number;
    }

    const useWindowSize = (): WindowSize => {
        const [windowSize, setWindowSize] = useState<WindowSize>({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        useEffect(() => {
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }, []);

        return windowSize;
    }

    let windowSize = useWindowSize();

    const setColumns = (screenWidth: number) => {
        let arr = [];

        if (screenWidth > 1480) {
            for (let i = 0; i < 17; i++) {
                arr.push(<S.LineColumns></S.LineColumns>);
            }
            return arr;
        }

        if (screenWidth > 760) {
            for (let i = 0; i < 11; i++) {
                arr.push(<S.LineColumns></S.LineColumns>);
            }
            return arr;
        }

        for (let i = 0; i < 9; i++) {
            arr.push(<S.LineColumns></S.LineColumns>);
        }
        return arr;
    }

    const setRows = (heightContent: number, screenWidth: number) => {
        let arr = [];
        let count = 0;

        if (screenWidth < 760) {
            count = Math.ceil(heightContent / ((screenWidth - 40) / 9));
            // console.log("((screenWidth - 40) / 9): " + ((screenWidth - 40) / 9));
        }
        if (screenWidth >= 760 && screenWidth < 1480) {
            count = Math.ceil(heightContent / ((screenWidth - 40) / 11));
            //console.log("((screenWidth - 40) / 11): " + ((screenWidth - 40) / 11));
        }
        if (screenWidth >= 1480) {
            count = Math.ceil(heightContent / ((screenWidth - 40) / 17));
            //console.log("((screenWidth - 40) / 17): " + ((screenWidth - 40) / 17));
        }

        //console.log("count: " + count);
        for (let i = 0; i < count; i++) {
            arr.push(<S.LineRows/>);
        }
        return arr;
    }


    return (
        <S.BackgroundGrid>
            <S.Columns>
                {setColumns(windowSize.width)}
            </S.Columns>
            <S.Rows>
                {setRows(height, windowSize.width)}
            </S.Rows>
        </S.BackgroundGrid>
    )
};

