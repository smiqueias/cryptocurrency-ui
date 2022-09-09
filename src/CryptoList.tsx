import { VStack, Heading } from "native-base";

export function CryptoList() {
  return (
    <VStack flex={1} alignItems={"center"} bg={"gray.600"} px={8} pt={24}>
      <Heading color={"red"} fontSize={"lg"} mt={20} mb={6}>
        Acesse sua conta
      </Heading>
    </VStack>
  );
}
