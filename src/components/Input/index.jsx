import { useState } from "react"
import { BoxInput, InputSyled, LabelStyled } from "./styles"

export const InputApp = ({ children, type, placeholder, register, errorInput, disabled, value }) => {
    const [showPassowrd, setShowPassword] = useState(false)

    return (
        <BoxInput>
            <LabelStyled>{children}</LabelStyled>
            {type === "password" ? (
                <>
                    <InputSyled disabled={disabled} errorInput={errorInput} type={showPassowrd ? "text" : "password"} placeholder={placeholder} {...register} />
                    <i onClick={() => setShowPassword(!showPassowrd)} className={showPassowrd ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i>
                </>
            ) : (
                <InputSyled value={value} disabled={disabled} errorInput={errorInput} type={type} placeholder={placeholder} {...register} />
            )}
        </BoxInput>
    )
}