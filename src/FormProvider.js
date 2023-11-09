import * as React from "react";

export const FormContext = React.createContext();

export function FormProvider({children}) {
    return (
        <FormContext.Provider>
            {children}
        </FormContext.Provider>
    )
}