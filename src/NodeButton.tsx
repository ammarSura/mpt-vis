import { Button, Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import { MAX_KEY_LENGTH } from "./LeafNodeDraw";
import nodeStyle from "./node-style";

type NodeButtonProps = {
    _key: number[]
    value: Uint8Array | null
    coors: {
        x: number
        y: number
    }
    label: string
}
export default function NodeButton({
    _key,
    value,
    coors,
    label
}: NodeButtonProps) {
    const [showValue, setShowValue] = useState(false)
    const buttonText = showValue ? `Value: ${value}`: `${label}${_key.join('')}`
    const truncatedText = buttonText.length > MAX_KEY_LENGTH ? buttonText.slice(0, MAX_KEY_LENGTH) + '...' : buttonText
    return (
        <Button
            onClick={() => {
                setShowValue(!showValue)
            }}
            style={{
                backgroundColor: "#68b867",
                top: coors.y,
                left: coors.x,
                ...nodeStyle
            }}
        >
            {
                buttonText.length > MAX_KEY_LENGTH ? <Tooltip label={buttonText}>
                    {truncatedText}
                </Tooltip> : buttonText
            }
        </Button>
    )
}
