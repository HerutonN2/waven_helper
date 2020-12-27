import styled from "styled-components";

const Container = styled.div`
  background: #1976d2;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  margin: 0;
  padding: 0;
`;

const CategoryContainer = styled.div`
  font-size: 1.2em;
  font-family: Arial, sans-serif;
  list-style-type: none;
  margin-bottom: 10px;
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 10px;
`;

const CategorySubContainer = styled.div`
  background-color: #1976d2;
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  ${CategoryContainer}:hover & {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.a`
  color: white;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

const PrimaryTitle = styled(Title)`
  text-transform: uppercase;
`;

export default function Navbar() {
  const categories = [
    [{ name: "Accueil" }],
    [
      { name: "Bien debuter" },
      { name: "Guide des classes" },
      { name: "Guide de combat" },
      { name: "Guide d'experience" },
    ],
    [{ name: "Recherche de groupe" }],
    [
      { name: "Builder" },
      { name: "Créer un build" },
      { name: "Rechercher un build" },
    ],
    [
      { name: "Iles" },
      { name: "Bwork" },
      { name: "Chafer" },
      { name: "Cochon" },
    ],
    [
      { name: "Encyclopedie" },
      { name: "Classes" },
      { name: "Gemmes" },
      { name: "Bagues" },
      { name: "Compagnons" },
      { name: "Bestiaire" },
    ],
  ];
  return (
    <Container>
      {categories.map((subcategories) => {
        const [primaryCategory, ...secondaryCategories] = subcategories;
        return (
          <CategoryContainer>
            <PrimaryTitle>{primaryCategory.name}</PrimaryTitle>
            <CategorySubContainer>
              {secondaryCategories.map((secondaryCategory) => (
                <Title>{secondaryCategory.name}</Title>
              ))}
            </CategorySubContainer>
          </CategoryContainer>
        );
      })}
    </Container>
  );
}
