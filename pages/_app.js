import dynamic from "next/dynamic";
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
//styles for image slider
import "../styles/styles.css"

const theme = extendTheme({
  colors: {
    brand: {
      "green": "#1F3D33",
      "olive": "#687A62",
      "brown": "#966241",
      "sand": "#C5AD8D",
      "grey": "#74706D",
      "cream": "#EFEDE8",
      "black": "#231F20",
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box fontFamily={'Lora'}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
    ssr: false,
});
