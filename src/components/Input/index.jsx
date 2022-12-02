import { BoxInput, InputSyled, LabelStyled } from "./styles"

export const InputApp = ({ children, type, placeholder, register, errorInput, disabled }) => {
    return (
        <BoxInput>
            <LabelStyled>{children}</LabelStyled>
            <InputSyled disabled={disabled} errorInput={errorInput} type={type} placeholder={placeholder} {...register}/>
        </BoxInput>
    )
}