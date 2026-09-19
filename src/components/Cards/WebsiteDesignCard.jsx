import React from "react";
import styled from "styled-components";

const VisitButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  padding: 10px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.primary_alt}
  );
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: 0.92;

  &:hover {
    opacity: 1;
    filter: brightness(1.05);
  }
`;

const Card = styled.article`
  width: min(100%, 340px);
  min-height: 480px;
  background: linear-gradient(
    180deg,
    rgba(15, 23, 42, 0.9),
    rgba(17, 24, 39, 0.86)
  );
  border-radius: 22px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.28);
  overflow: hidden;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid rgba(148, 163, 184, 0.1);
  transition: all 0.35s ease-in-out;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(139, 92, 246, 0.55);
    box-shadow: 0 28px 82px rgba(139, 92, 246, 0.18);
    filter: brightness(1.02);
  }
`;

const ImageLink = styled.a`
  display: block;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  object-position: top center;
  background-color: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.24);
  display: block;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.primary_alt};
  background: rgba(34, 211, 238, 0.08);
  border: 1px solid rgba(34, 211, 238, 0.2);
  padding: 5px 9px;
  border-radius: 999px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 2px;
`;

const Title = styled.h3`
  font-size: 1.28rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  margin: 0;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.7;
`;

const WebsiteDesignCard = ({ design }) => {
  return (
    <Card>
      <ImageLink
        href={design.webapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${design.title} website`}
      >
        <Image src={design.image} alt={`${design.title} website preview`} />
      </ImageLink>
      <Tags>
        {design.tags?.map((tag) => (
          <Tag key={`${design.title}-${tag}`}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{design.title}</Title>
        <Description>{design.description}</Description>
      </Details>
      <VisitButton
        href={design.webapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Website
      </VisitButton>
    </Card>
  );
};

export default WebsiteDesignCard;
