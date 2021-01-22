import React from 'react';

import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Text,
} from '@chakra-ui/react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { SectionWrapper } from '../../pages/components';

declare interface AccordionItem {
  title: string;
  content: React.ReactNode;
}
declare interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }): JSX.Element => {
  return (
    <ChakraAccordion allowToggle allowMultiple>
      {items.map((item) => (
        <AccordionItem key={item.title} mb={10}>
          {({ isExpanded }: { isExpanded: boolean }) => (
            <>
              <AccordionButton
                _hover={{ boxShadow: 'none' }}
                _focus={{
                  boxShadow: 'none',
                }}
                className={`accordion-btn-bg`}
                borderRadius={5}
                py={5}
                px={{ base: 5, md: 20 }}>
                <Box flex={1} textAlign="left" py="10px">
                  <Text className="font-md font-weight-500 color-white">
                    {item.title}
                  </Text>
                </Box>
                <Box
                  as={MdKeyboardArrowDown}
                  transform={`rotate(${isExpanded ? '180deg' : '0deg'})`}
                  transition="0.5s transform"
                  size={25}
                  className="color-white"
                />
              </AccordionButton>
              <AccordionPanel
                lineHeight={'24px'}
                className="bg-white"
                px={{ base: 5, md: 20 }}
                py={10}
                pb={5}
                color="#8E94A7">
                {item.content}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </ChakraAccordion>
  );
};
