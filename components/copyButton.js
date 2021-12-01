import {Button, useClipboard,} from "@chakra-ui/react";
import { HiOutlineClipboardCopy, HiClipboardCopy } from "react-icons/hi";

export default function CopyButton({value}) {
    const { hasCopied, onCopy } = useClipboard(value)
    return (
        <>
            <Button
                pos="static"
                onClick={onCopy}
                leftIcon={hasCopied ? <HiClipboardCopy /> : <HiOutlineClipboardCopy />}
                bg="brand.sand"
                color="white"
                _hover={{
                    bg: "brand.olive",
                }}
            >
                {hasCopied ? "Code Copied" : "Copy Code"}
            </Button>
        </>
    )
}