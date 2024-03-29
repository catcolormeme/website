import { useTranslation } from "@pancakeswap/localization";
import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { HelpIcon } from "../../../../components/Svg";
import { Skeleton } from "../../../../components/Skeleton";
import { useTooltip } from "../../../../hooks/useTooltip";
import { FarmTableMultiplierProps } from "../../types";

const ReferenceElement = styled.div`
  display: inline-block;
`;

const MultiplierWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  width: 36px;
  text-align: right;
  margin-right: 14px;

  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: left;
    margin-right: 0;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Multiplier: React.FunctionComponent<React.PropsWithChildren<FarmTableMultiplierProps>> = ({ multiplier }) => {
  const displayMultiplier = multiplier ? multiplier.toLowerCase() : <Skeleton width={30} />;
  const { t } = useTranslation();
  const tooltipContent = (
    <>
      <Text>
        {t(
          `The Multiplier represents the proportion of ${process.env.NEXT_PUBLIC_NAME_UPPER} rewards each farm receives, as a proportion of the ${process.env.NEXT_PUBLIC_NAME_UPPER} distributed each block.`
        )}
      </Text>
      <Text my="24px">
        {t(
          `For example, if a 1x farm received 1 ${process.env.NEXT_PUBLIC_NAME_UPPER} per block, a 40x farm would receive 40 ${process.env.NEXT_PUBLIC_NAME_UPPER} per block.`
        )}
      </Text>
      <Text>{t("This amount is already included in all APR calculations for the farm.")}</Text>
    </>
  );
  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, {
    placement: "top-end",
    tooltipOffset: [20, 10],
  });

  return (
    <Container>
      <MultiplierWrapper>{displayMultiplier}</MultiplierWrapper>
      <ReferenceElement ref={targetRef}>
        <HelpIcon color="textSubtle" />
      </ReferenceElement>
      {tooltipVisible && tooltip}
    </Container>
  );
};

export default Multiplier;
