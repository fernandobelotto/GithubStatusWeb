import { Center, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AppButton from "./components/Button";
import { GithubResponse } from "./models";

export default function App() {
  const [stats, setStats] = useState<GithubResponse | null>(null);

  function getGithubStats() {
    fetch("https://www.githubstatus.com/api/v2/summary.json")
      .then((res) => res.json())
      .then((res) => setStats(res));
    console.log(stats);
  }

  return (
    <Center h="100vh">
      <Container>
        <VStack w="100%">
          <AppButton onClick={getGithubStats}>Get Status!</AppButton>
          <VStack spacing={5} w="100%">
            {stats?.components.map((component) => {
              if (component.id === "0l2p9nhqnxpd") return null;
              return (
                <>
                  <Flex
                    align="center"
                    justify="space-between"
                    p={3}
                    bg="gray.50"
                    rounded="lg"
                    w="100%"
                  >
                    <Text fontWeight="500">{component.name}</Text>
                    <Text>{component.status}</Text>
                  </Flex>
                </>
              );
            })}
          </VStack>
        </VStack>
      </Container>
    </Center>
  );
}
