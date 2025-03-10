import React, { useState, useEffect } from "react";
import { Box, Flex, useToast } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Content } from "../components/Content";
import { useLocation } from "react-router-dom";
import axios from "axios";

const resetList = async (token) => {
  try {
    const res = await axios.get(
      `https://hiring.reachinbox.xyz/api/v1/onebox/reset`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (err) {
    console.log("data not fetched");
  }
};

const fetchData = async (token) => {
  try {
    const res = await axios.get(
      "https://hiring.reachinbox.xyz/api/v1/onebox/list",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
};

const Onebox = () => {
  const [data, setData] = useState(null);
  const [contentName, setContentName] = useState("Home");
  const location = useLocation();
  const token =
    new URLSearchParams(location.search).get("token") ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRpdHlhbmVydmVzQGdtYWlsLmNvbSIsImlkIjoyNywiZmlyc3ROYW1lIjoiQWRpdHlhIiwibGFzdE5hbWUiOiJDaG91ZGhhcnkifSwiaWF0IjoxNzExODkwODAyLCJleHAiOjE3NDM0MjY4MDJ9.FMqgzx1FIIgCAjV9ddunGqegxNtE4MQKHQDV0ZSSKzs";

  localStorage.setItem("token", token);
  const toast = useToast();

  useEffect(() => {
    if (token) {
      fetchData(token)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          toast({
            title: "Error",
            description: "Failed to fetch data.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    }
  }, [token]);

  return (
    <Box>
      <Flex>
        <Sidebar contentName={contentName} setContentName={setContentName} />
        <Box w="96%">
          <Navbar />
          <Content contentName={contentName} data={data} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Onebox;
