import { BoxSelect, LabelStyled, SelectStyled } from "./styles"

export const Select = ({ children, register, errorSelect }) => {
    return (
        <BoxSelect>
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
        </BoxSelect>
    )
}