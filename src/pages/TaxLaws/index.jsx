import { Helmet } from "react-helmet";
import { Box } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TaxLawsDigest from "./TaxLawsDigest";


export default function TaxLaws() {
  return (
    <>
      <Helmet>
        <title>Tax Laws - Legal Frameworks</title>
        <meta
          name="description"
          content="Access the full text of the Tax Laws. Explore sections covering income tax act, exemptions, deductions, and more."
        />
      </Helmet>
      <Box bg="white.a700" w="100%">
        {/* Header Section */}
        <Header alignSelf="stretch" />
        
        {/* Tax Laws Digest */}
        <TaxLawsDigest />

        {/* Footer */}
        <Footer mt="0px" />
      </Box>
    </>
  );
}
