import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 110px 30px 120px;
  background:
    radial-gradient(circle at top left, rgba(139, 92, 246, 0.24), transparent 28%),
    radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.16), transparent 26%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.7));
  z-index: 1;

  @media (max-width: 960px) {
    padding: 80px 16px 90px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: end;
  width: 100%;
  max-width: 1360px;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  pointer-events: none;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 38px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
`;

export const HeroRightContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 2;

  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 40px;
  }
`;

export const RightPanel = styled.div`
  position: relative;
  width: min(100%, 420px);
  padding: 28px;
  border-radius: 28px;
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.22);
  box-shadow: 0 26px 80px rgba(15, 23, 42, 0.52);
  backdrop-filter: blur(16px);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -25% auto auto -18%;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.28), transparent 70%);
  }
`;

export const PanelTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
  position: relative;
  z-index: 1;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary_alt};
  background: rgba(34, 211, 238, 0.08);
  border: 1px solid rgba(34, 211, 238, 0.2);

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 14px rgba(34, 197, 94, 0.8);
  }
`;

export const MiniCard = styled.div`
  display: grid;
  gap: 18px;
  position: relative;
  z-index: 1;
`;

export const MetricRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.15);
`;

export const MetricLabel = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
`;

export const MetricValue = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
  position: relative;
  z-index: 1;
`;

export const PanelTag = styled.span`
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(139, 92, 246, 0.14);
  border: 1px solid rgba(139, 92, 246, 0.28);
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: clamp(2.7rem, 5vw, 4.6rem);
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.04;
  letter-spacing: -0.06em;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    line-height: 1.12;
  }
`;

export const TextLoop = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin: 12px 0 20px;
  font-weight: 600;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;

  @media (max-width: 960px) {
    justify-content: center;
    text-align: center;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary_alt};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  max-width: 680px;
  font-size: 1.08rem;
  line-height: 1.8;
  margin-bottom: 34px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 0.97rem;
    line-height: 1.75;
  }
`;

export const CTAGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: min(100%, 220px);
  text-decoration: none;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 999px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: all 0.2s ease-in-out;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary_alt});
  box-shadow: 0 18px 40px rgba(139, 92, 246, 0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 48px rgba(34, 211, 238, 0.2);
  }

  @media (max-width: 640px) {
    padding: 14px 0;
    font-size: 0.95rem;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: min(100%, 180px);
  text-decoration: none;
  padding: 15px 0;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.4);
  cursor: pointer;
  font-size: 0.96rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(34, 211, 238, 0.55);
    background: rgba(34, 211, 238, 0.05);
  }
`;