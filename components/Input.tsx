import { Box, Text } from "@chakra-ui/react";

type InputProps = {
  label: string;
  inputRef: any;
};

const Input = ({ label, inputRef }: InputProps) => {
  return (
    <Box padding="2% 0">
      <Text
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#BEC7C8",
          paddingBottom: "2%",
        }}
      >
        {label}
      </Text>
      <input
        style={{
          background:
            "linear-gradient(0deg, rgba(30, 59, 63, 0.41), rgba(30, 59, 63, 0.41))",
          border: "1px solid #465B60",
          backdropFilter: "blur(5px)",
          borderRadius: "15px",
          color: "#848E93",
          fontWeight: 400,
          fontSize: "16px",
          padding: "2% 4%",
          width: "100%",
        }}
        ref={inputRef}
      />
    </Box>
  );
};

export default Input;
