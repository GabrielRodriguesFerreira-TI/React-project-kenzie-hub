import { BoxSelect, LabelStyled, SelectStyled } from "./styles"

export const Select = ({ children, register, errorSelect, type }) => {
    return (
        <BoxSelect>
            {type === "formModal" ? (
                <>
                    <LabelStyled>{children}</LabelStyled>
                    <SelectStyled errorSelect={errorSelect} {...register}>
                        <option hidden disabled selected value="">Selecionar Status</option>
                        <optgroup label="Status">
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </optgroup>
                    </SelectStyled>
                </>
            ) : (
                <>
                    <LabelStyled>{children}</LabelStyled>
                    <SelectStyled errorSelect={errorSelect} {...register}>
                        <option hidden disabled selected value="">Selecionar Módulo</option>
                        <optgroup label="Módulos">
                            <option value="Primeiro Módulo (Introdução ao Frontend)">Primeiro Módulo (Introdução ao Frontend)</option>
                            <option value="Segundo Módulo (Frontend Avançado)">Segundo Módulo (Frontend Avançado)</option>
                            <option value="Terceiro Módulo (Introdução ao Backend)">Tercerio Módulo (Introdução ao Backend)</option>
                            <option value="Quarto Módulo (Backend Avançado)">Quarto Módulo (Backend Avançado)</option>
                        </optgroup>
                    </SelectStyled>
                </>
            )}
        </BoxSelect>
    )
}