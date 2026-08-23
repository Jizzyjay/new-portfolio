import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary_alt});
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const Card = styled.div`
  width: min(100%, 340px);
  min-height: 500px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(17, 24, 39, 0.86));
  cursor: pointer;
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

  &:hover ${Button} {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.white};
  border-radius: 16px;
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.24);
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

const Title = styled.div`
  font-size: 1.28rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.7;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: auto;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags?.map((tag) => (
          <Tag key={`${project.title}-${tag}`}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar key={member.img} src={member.img} alt="team member" />
        ))}
      </Members>
      <Button type="button">View Project</Button>
    </Card>
  );
};

export default ProjectCards;