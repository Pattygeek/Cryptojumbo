import React from 'react';

import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  Box,
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
        <AccordionItem key={item.title} mb={{ base: 5, md: 10 }}>
          {({ isExpanded }: { isExpanded: boolean }) => (
            <>
              <AccordionButton
                _hover={{ boxShadow: 'none' }}
                _focus={{
                  boxShadow: 'none',
                }}
                className={`accordion-btn-bg`}
                borderRadius={{ base: 2, md: 5 }}
                py={{ base: 2, md: 5 }}
                px={{ base: 5, md: 20 }}>
                <Box flex={1} textAlign="left" py="10px">
                  <Text
                    fontSize={{ base: '12px', md: '18px' }}
                    lineHeight="16px"
                    className="font-weight-500 color-white">
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
                fontSize={{ base: '12px', md: '16px' }}
                lineHeight={{ base: '16px', md: '24px' }}
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
