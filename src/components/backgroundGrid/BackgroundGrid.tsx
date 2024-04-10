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

    const setRows = (heightContent: number) => {
        console.log(heightContent);
        let arr = [];
        for (let i = 0; i < heightContent/10; i++) {
            arr.push(<S.LineRows></S.LineRows>);
        }
        return arr;
    }


    return (
        <S.BackgroundGrid>
            <S.Columns>
                {setColumns(windowSize.width)}
            </S.Columns>
            <S.Rows>
                {setRows(height)}
            </S.Rows>
        </S.BackgroundGrid>
    )
};

