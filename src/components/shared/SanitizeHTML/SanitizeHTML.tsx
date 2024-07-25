import { createElement, HTMLAttributes } from "react"
import sanitize from "sanitize-html"


type SanitizeHTMLProps = {
    children: string
    tag:string
} & HTMLAttributes<HTMLElement>

export function SanitizeHTML({ tag,children, ...rest }: SanitizeHTMLProps) {
    const sanitizedHTML = sanitize(children, {
        allowedTags: ['b', 'i', 'em', 'strong'] //Permite que etiquetas van a pasar en el proceso de sanitizacion, es bueno dejarla descativada para evitar problemas de seguridad
    })

    return createElement(
        tag,
        {...rest},
        sanitizedHTML
    )
}