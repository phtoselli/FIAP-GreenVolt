import "./index.css";
import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Image,
  List,
  Row,
  Space,
  Anchor,
  Drawer,
} from "antd";

import Meta from "antd/es/card/Meta";
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";

import about from "./assets/about.png";
import brasil from "./assets/brasil.png";
import gamification from "./assets/gamification.png";
import hero from "./assets/hero.png";
import name from "./assets/logo-name.svg";
import logo from "./assets/logo-with-name.svg";
import problem from "./assets/problem.png";
import share from "./assets/share.png";

import icon4 from "./assets/icon4.svg";
import icon5 from "./assets/icon5.svg";
import icon6 from "./assets/icon6.svg";

import quote1 from "./assets/quote1.svg";
import quote2 from "./assets/quote2.svg";

import {
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import person1 from "./assets/person1.png";
import person2 from "./assets/person2.png";
import person3 from "./assets/person3.png";
import { GetOffices } from "./services/requests/getoffices";
import { GetAbout } from "./services/requests/getAbout";

function App() {
  const [containersMaxWidth, setContainersMaxWidth] = useState(1000);
  const textColor = "#ffffff";
  const titleColor = "#6CCF9B";
  const { offices } = GetOffices();
  const { aboutData } = GetAbout();

  // Estado para controlar o Drawer (menu sanduíche)
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  // Função para ajustar a largura do container com base na largura da janela
  const handleResize = () => {
    if (window.innerWidth <= 800) {
      setContainersMaxWidth("100%");
    } else {
      setContainersMaxWidth(1000);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex vertical="vertical" align="center" justify="center">
      {/* ------------------ CABECALHO ------------------------- */}
      <Flex
        align="center"
        justify="space-between"
        className="navbar"
        style={{
          padding: "16px",
          width: "100%",
          borderBottom: "2px solid #ffffff05",
        }}
      >
        <Image preview={false} src={logo} width={150} />
        {/* Menu para desktop */}
        <Anchor
          className="desktop-menu"
          direction="horizontal"
          affix
          items={[
            {
              key: "home",
              href: "#home",
              title: <span className="light-gray-link">Início</span>,
            },
            {
              key: "problem",
              href: "#problem",
              title: <span className="light-gray-link">Problema</span>,
            },
            {
              key: "gamification",
              href: "#gamification",
              title: <span className="light-gray-link">Gamificação</span>,
            },
            {
              key: "share",
              href: "#share",
              title: <span className="light-gray-link">Compartilhamento</span>,
            },
            {
              key: "advantages",
              href: "#advantages",
              title: <span className="light-gray-link">Vantagens</span>,
            },
            {
              key: "testimonial",
              href: "#testimonial",
              title: <span className="light-gray-link">Testemunhos</span>,
            },
            {
              key: "about",
              href: "#about",
              title: <span className="light-gray-link">Sobre</span>,
            },
            {
              key: "contact",
              href: "#contact",
              title: <span className="light-gray-link">Contato</span>,
            },
          ]}
        />
        {/* Ícone do menu sanduíche para mobile */}
        <MenuOutlined className="mobile-menu-icon" onClick={showDrawer} />
        {/* Drawer para o menu mobile */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          visible={drawerVisible}
        >
          <Anchor
            direction="vertical"
            affix
            items={[
              {
                key: "home",
                href: "#home",
                title: <span className="light-gray-link">Início</span>,
              },
              {
                key: "problem",
                href: "#problem",
                title: <span className="light-gray-link">Problema</span>,
              },
              {
                key: "gamification",
                href: "#gamification",
                title: <span className="light-gray-link">Gamificação</span>,
              },
              {
                key: "share",
                href: "#share",
                title: (
                  <span className="light-gray-link">Compartilhamento</span>
                ),
              },
              {
                key: "advantages",
                href: "#advantages",
                title: <span className="light-gray-link">Vantagens</span>,
              },
              {
                key: "testimonial",
                href: "#testimonial",
                title: <span className="light-gray-link">Testemunhos</span>,
              },
              {
                key: "about",
                href: "#about",
                title: <span className="light-gray-link">Sobre</span>,
              },
              {
                key: "contact",
                href: "#contact",
                title: <span className="light-gray-link">Contato</span>,
              },
            ]}
          />
        </Drawer>
      </Flex>

      {/* ------------------ HERO  ------------------------- */}
      <Flex
        align="center"
        justify="center"
        className="home"
        id="home"
        style={{
          maxWidth: containersMaxWidth,
          width: containersMaxWidth,
          padding: "80px 0px",
        }}
      >
        <Row>
          <Col xs={24} md={16}>
            <Flex
              align="flex-start"
              justify="center"
              vertical="vertical"
              style={{ padding: "16px" }}
            >
              <Image
                preview={false}
                src={name}
                width={300}
                style={{ marginBottom: "20px" }}
                alt="Logo da Green Volt com a palavra Green Volt escrita em verde e roxo"
              />
              <Title level={1} style={{ color: textColor, marginTop: "0" }}>
                Economia de Energia e Sustentabilidade ao Seu Alcance
              </Title>
              <Paragraph
                className="large-paragraph"
                style={{ color: textColor, opacity: "0.5" }}
              >
                Conecte, economize e compartilhe energia de forma inteligente
                com o nosso aplicativo.
              </Paragraph>
              <Button className="button-padding" type="primary" size="large">
                Baixe o App
              </Button>
            </Flex>
          </Col>
          <Col xs={24} md={8}>
            <Flex align="center" justify="center">
              <Image
                preview={false}
                src={hero}
                width={300}
                alt="Ilustração de um celular com uma nota de pagamento saindo da tela e um botão escrito 'calculate' / 'calcular'"
              />
            </Flex>
          </Col>
        </Row>
      </Flex>

      {/* ------------------ PROBLEMA ---------------------- */}
      <Flex
        align="center"
        justify="center"
        style={{
          maxWidth: containersMaxWidth,
          width: containersMaxWidth,
          padding: "80px 16px",
        }}
      >
        <Row id="problem">
          <Col span={24}>
            <Flex vertical="vertical" align="flex-start" justify="center">
              <Title
                level={1}
                style={{
                  color: titleColor,
                  textTransform: "uppercase",
                  marginBottom: "0",
                }}
              >
                Problema
              </Title>
              <Title level={1} style={{ color: textColor, marginTop: "0" }}>
                Por que a{" "}
                <Image
                  preview={false}
                  src={name}
                  width={160}
                  alt="Imagem com o logo do Green Volt, com a palavra Green Volt escrita"
                  style={{ marginTot: "0" }}
                />{" "}
                é essencial?
              </Title>
            </Flex>
          </Col>
          <Col xs={24} md={10}>
            <Image preview={false} src={problem} width={300} />
          </Col>
          <Col xs={24} md={14}>
            <Flex align="center" justify="center" style={{ padding: "24px" }}>
              <Paragraph
                className="large-paragraph"
                style={{ color: `${textColor}90` }}
              >
                Vivemos em um mundo onde os{" "}
                <Text style={{ color: textColor, fontWeight: "bold" }}>
                  recursos naturais
                </Text>{" "}
                estão cada vez mais escassos e o custo da energia só aumenta.
                Muitas famílias enfrentam dificuldades para entender onde
                realmente gastam energia e como poderiam economizar. Além disso,
                as opções de gerar a própria energia, como as placas solares,
                nem sempre oferecem uma forma prática de monitorar o quanto se
                está realmente economizando ou compartilhando com a rede.
              </Paragraph>
            </Flex>
          </Col>
        </Row>
      </Flex>

      {/* ------------------ GAMIFICATION ------------------ */}
      <Flex
        align="center"
        justify="center"
        style={{
          maxWidth: containersMaxWidth,
          width: containersMaxWidth,
          padding: "80px 16px",
        }}
      >
        <Row id="gamification">
          <Col span={24}>
            <Flex vertical="vertical" align="flex-start" justify="center">
              <Title
                level={1}
                style={{
                  color: titleColor,
                  textTransform: "uppercase",
                  marginBottom: "0",
                }}
              >
                Gameficação
              </Title>
              <Title level={1} style={{ color: textColor, marginTop: "0" }}>
                Economize Energia de Forma Divertida e Interativa
              </Title>
            </Flex>
          </Col>
          <Col xs={24} md={16}>
            <Flex align="center" justify="center">
              <Paragraph
                className="large-paragraph"
                style={{ color: `${textColor}90` }}
              >
                O GreenVolt utiliza gamificação para ajudar você a economizar
                energia, ao mesmo tempo em que promove a conscientização sobre o
                consumo sustentável. Através de dispositivos IoT e Inteligência
                Artificial, nosso aplicativo monitora o uso dos seus aparelhos e
                compara seus hábitos com padrões globais. Economize pontos,
                desbloqueie conquistas e desafie-se a consumir menos!
              </Paragraph>
            </Flex>
          </Col>
          <Col xs={24} md={8}>
            <Image
              preview={false}
              src={gamification}
              width={300}
              alt="Ilustração de um celular com uma trilha de jogo na tela, bandeirinhas de chegada e medalha. Tudo na cor azul"
            />
          </Col>
        </Row>
      </Flex>

      {/* ------------------ COMPARTILHAMENTO ----------------- */}
      <Flex
        align="center"
        justify="center"
        style={{
          maxWidth: containersMaxWidth,
          width: containersMaxWidth,
          padding: "80px 16px",
        }}
      >
        <Row id="share">
          <Col span={24}>
            <Flex
              vertical="vertical"
              align="flex-start"
              justify="center"
              style={{ padding: "40px 0px" }}
            >
              <Title
                level={1}
                style={{
                  color: titleColor,
                  textTransform: "uppercase",
                  marginBottom: "0",
                }}
              >
                Compartilhamento
              </Title>
              <Title
                level={1}
                style={{ color: textColor, marginTop: "0", marginBottom: "0" }}
              >
                Acompanhe a Energia que Você Gera e Compartilhe com a Rede
              </Title>
            </Flex>
          </Col>
          <Col xs={24} md={10}>
            <Image
              preview={false}
              src={share}
              width={300}
              alt="Ilustração de menina em frente a placas solares e turbinas eólicas ao fundo"
            />
          </Col>
          <Col xs={24} md={14}>
            <Flex
              vertical="vertical"
              align="flex-start"
              justify="center"
              style={{ padding: "24px" }}
            >
              <Paragraph
                className="large-paragraph"
                style={{ color: `${textColor}90` }}
              >
                Para quem já investiu em placas solares, o GreenVolt oferece um
                monitoramento completo da geração de energia e do impacto
                financeiro dessa produção. Além disso, incentivamos o
                compartilhamento de energia com a rede, permitindo que você
                contribua com a comunidade e visualize os benefícios de sua
                geração em relação ao consumo doméstico.
              </Paragraph>
              <Button className="button-padding" type="primary">
                Baixe o App
              </Button>
            </Flex>
          </Col>
        </Row>
      </Flex>

      {/* ------------------ VANTAGENS ------------------------- */}
      <Flex
        align="center"
        justify="center"
        style={{
          maxWidth: containersMaxWidth,
          width: containersMaxWidth,
          padding: "80px 16px",
        }}
      >
        <Row id="advantages">
          <Col span={24}>
            <Flex vertical="vertical" align="flex-start" justify="center">
              <Title
                level={1}
                style={{
                  color: titleColor,
                  textTransform: "uppercase",
                  marginBottom: "0",
                }}
              >
                Vantagens
              </Title>
              <Title level={1} style={{ color: textColor, marginTop: "0" }}>
                Por que faremos a diferença na sua vida?
              </Title>
            </Flex>
          </Col>
          <Col span={24}>
            <Row justify="center" gutter={24}>
              <Col xs={24} md={8} style={{ padding: "16px" }}>
                <Flex
                  vertical="vertical"
                  align="center"
                  justify="center"
                  style={{
                    border: "1px solid purple",
                    padding: "16px",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                >
                  <Paragraph
                    className="large-paragraph"
                    style={{ width: "100%", color: textColor }}
                  >
                    01
                  </Paragraph>
                  <Image preview={false} src={icon4} width={50} />
                  <Paragraph
                    className="large-paragraph"
                    style={{ color: textColor, textAlign: "center" }}
                  >
                    Economia Inteligente
                  </Paragraph>
                  <Paragraph
                    style={{ color: `${textColor}90`, textAlign: "center" }}
                  >
                    Reduza seus gastos ao entender onde e como você gasta
                    energia.
                  </Paragraph>
                </Flex>
              </Col>
              <Col xs={24} md={8} style={{ padding: "16px" }}>
                <Flex
                  vertical="vertical"
                  align="center"
                  justify="center"
                  style={{
                    border: "1px solid purple",
                    padding: "16px",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                >
                  <Paragraph
                    className="large-paragraph"
                    style={{ width: "100%", color: textColor }}
                  >
                    02
                  </Paragraph>
                  <Image preview={false} src={icon5} width={50} />
                  <Paragraph
                    className="large-paragraph"
                    style={{ color: textColor, textAlign: "center" }}
                  >
                    Sustentabilidade
                  </Paragraph>
                  <Paragraph
                    style={{ color: `${textColor}90`, textAlign: "center" }}
                  >
                    Contribua para o meio ambiente, adotando hábitos mais
                    conscientes.
                  </Paragraph>
                </Flex>
              </Col>
              <Col xs={24} md={8} style={{ padding: "16px" }}>
                <Flex
                  vertical="vertical"
                  align="center"
                  justify="center"
                  style={{
                    border: "1px solid purple",
                    padding: "16px",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                >
                  <Paragraph
                    className="large-paragraph"
                    style={{ width: "100%", color: textColor }}
                  >
                    03
                  </Paragraph>
                  <Image preview={false} src={icon6} width={50} />
                  <Paragraph
                    className="large-paragraph"
                    style={{ color: textColor, textAlign: "center" }}
                  >
                    Incentivos Financeiros
                  </Paragraph>
                  <Paragraph
                    style={{ color: `${textColor}90`, textAlign: "center" }}
                  >
                    Com a economia de energia e o compartilhamento, você pode
                    obter descontos na conta de luz.
                  </Paragraph>
                </Flex>
              </Col>
            </Row>
          </Col>
        </Row>
      </Flex>

      {/* ------------------ TESTEMUNHOS ----------------------- */}
      <Flex
        align="center"
        justify="center"
        style={{
          maxWidth: containersMaxWidth,
          width: containersMaxWidth,
          padding: "80px 16px",
        }}
      >
        <Row id="testimonial">
          <Col span={24}>
            <Title level={1} style={{ textAlign: "center", color: textColor }}>
              <Image preview={false} src={quote1} width={30} /> Testemunhos dos
              clientes <Image preview={false} src={quote2} width={30} />
            </Title>
            <Title
              level={3}
              style={{ textAlign: "center", color: `${textColor}90` }}
            >
              O que Nossos Usuários Dizem?
            </Title>
          </Col>
          <Col span={24}>
            <Row gutter={24}>
              <Col xs={24} md={8} style={{ padding: "24px" }}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    height: "100%",
                    background: "none",
                    border: "none",
                  }}
                  cover={
                    <img
                      alt="Homem de cabelos grisalhos sorrindo de forma amigável"
                      src={person1}
                    />
                  }
                >
                  <Meta
                    title={
                      <Paragraph
                        className="large-paragraph"
                        style={{ color: textColor }}
                      >
                        Carlos, São Paulo
                      </Paragraph>
                    }
                    description={
                      <Paragraph
                        className="large-paragraph"
                        style={{ color: `${textColor}90` }}
                      >
                        &quot;Com o GreenVolt, consegui reduzir em 20% minha
                        conta de luz e ainda ajudar o meio ambiente.&quot;
                      </Paragraph>
                    }
                  />
                </Card>
              </Col>
              <Col xs={24} md={8} style={{ padding: "24px" }}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    height: "100%",
                    background: "none",
                    border: "none",
                  }}
                  cover={
                    <img
                      alt="Imagem de uma mulher com cabelo preto e expressão serena"
                      src={person2}
                    />
                  }
                >
                  <Meta
                    title={
                      <Paragraph
                        className="large-paragraph"
                        style={{ color: textColor }}
                      >
                        Joana, Belo Horizonte
                      </Paragraph>
                    }
                    description={
                      <Paragraph
                        className="large-paragraph"
                        style={{ color: `${textColor}90` }}
                      >
                        &quot;Agora entendo o consumo de cada aparelho da minha
                        casa, e o app me ajudou a economizar mais do que eu
                        imaginava.&quot;
                      </Paragraph>
                    }
                  />
                </Card>
              </Col>
              <Col xs={24} md={8} style={{ padding: "24px" }}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    height: "100%",
                    background: "none",
                    border: "none",
                  }}
                  cover={
                    <img
                      alt="Imagem de uma mulher com cabelos ruivos e expressão neutra"
                      src={person3}
                    />
                  }
                >
                  <Meta
                    title={
                      <Paragraph
                        className="large-paragraph"
                        style={{ color: textColor }}
                      >
                        Fernanda, Rio de Janeiro
                      </Paragraph>
                    }
                    description={
                      <Paragraph
                        className="large-paragraph"
                        style={{ color: `${textColor}90` }}
                      >
                        &quot;É muito satisfatório acompanhar a energia que eu
                        gero e compartilho com a rede. A gamificação torna tudo
                        mais divertido!&quot;
                      </Paragraph>
                    }
                  />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Flex>

      {/* ------------------ SOBRE NÓS ------------------------- */}
      <Flex
        align="center"
        justify="center"
        style={{
          maxWidth: containersMaxWidth,
          width: containersMaxWidth,
          padding: "80px 16px",
        }}
      >
        <Row id="about">
          <Col span={24}>
            <Flex
              vertical="vertical"
              align="flex-start"
              justify="center"
              style={{ padding: "40px 0px" }}
            >
              <Title
                level={1}
                style={{
                  color: titleColor,
                  textTransform: "uppercase",
                  marginBottom: "0",
                }}
              >
                Sobre nós
              </Title>
              <Title
                level={1}
                style={{
                  color: textColor,
                  marginTop: "0",
                  marginBottom: "0",
                }}
              >
                Quem somos?
              </Title>
            </Flex>
          </Col>
          <Col xs={24} md={16}>
            <Flex align="center" justify="center">
              <Paragraph
                className="large-paragraph"
                style={{ color: `${textColor}90` }}
              >
                {aboutData?.descricao.map((item, index) => {
                  if (item.estilo === "destaque") {
                    return (
                      <Text
                        key={index}
                        className="large-paragraph"
                        style={{ color: textColor }}
                      >
                        <strong>{item.texto}</strong>
                        <br />
                      </Text>
                    );
                  }
                  if (item.estilo === "normal") {
                    return (
                      <Text
                        key={index}
                        className="large-paragraph"
                        style={{ color: `${textColor}90` }}
                      >
                        {item.texto}
                      </Text>
                    );
                  }
                })}
              </Paragraph>
            </Flex>
          </Col>
          <Col xs={24} md={8}>
            <Image
              preview={false}
              src={about}
              width={400}
              alt="Ilustração de uma tomada ligando turbinas de energia eólica e o sol ao centro"
            />
          </Col>
          {/* ----------------- ONDE ATUAMOS -------------- */}
          <Col span={24}>
            <Flex
              vertical="vertical"
              align="flex-start"
              justify="center"
              style={{ padding: "40px 0px" }}
            >
              <Title level={1} style={{ color: textColor }}>
                Onde atuamos?
              </Title>
              <Paragraph
                className="large-paragraph"
                style={{ color: `${textColor}90` }}
              >
                Nosso principal escritório sede está localizado na{" "}
                <Text className="large-paragraph" style={{ color: textColor }}>
                  Av. Paulista, 1.000
                </Text>
                , São Paulo/SP, mas atendemos clientes em diversas regiões para
                levar energia sustentável a cada vez mais brasileiros.
              </Paragraph>
            </Flex>
          </Col>
          <Col xs={24} md={8}>
            <Image
              preview="false"
              src={brasil}
              width={250}
              alt="Ilustração do mapa do Brasil em pontos brancos"
            />
          </Col>
          <Col span={16}>
            <Flex
              vertical="vertical"
              align="center"
              justify="center"
              style={{ padding: "40px 0px" }}
            >
              <Divider
                size={0}
                style={{
                  margin: "0px",
                  padding: "0px",
                  borderColor: "#ffffff20",
                }}
              />
              <Paragraph style={{ color: textColor, paddingTop: "12px" }}>
                Se sua cidade está na lista abaixo,{" "}
                <Link>baixe o aplicativo</Link> e comece a usar:
              </Paragraph>
              <Divider
                size={0}
                style={{
                  margin: "0px",
                  marginBottom: "24px",
                  padding: "0px",
                  borderColor: "#ffffff20",
                }}
              />
              <Row style={{ width: "100%" }}>
                <Col>
                  <List
                    grid={{
                      column: 2,
                    }}
                    dataSource={offices}
                    renderItem={(office) => (
                      <Paragraph
                        style={{ color: textColor, marginRight: "10px" }}
                        key={office?.id}
                      >
                        {office?.localizacao}
                        <br />
                        <Text
                          style={{
                            color: `${textColor}90`,
                          }}
                        >
                          {" "}
                          {office?.endereco}
                        </Text>
                      </Paragraph>
                    )}
                  />
                </Col>
              </Row>
            </Flex>
          </Col>
        </Row>
      </Flex>

      {/* ------------------ RODAPE ---------------------------- */}
      <Flex
        align="center"
        justify="center"
        style={{
          maxWidth: containersMaxWidth,
          width: containersMaxWidth,
          padding: "80px 16px",
          borderTop: "2px solid #ffffff05",
        }}
      >
        <Row style={{ width: "100%" }} gutter={[0, 80]}>
          <Col span={24}>
            <Flex justify="space-between" align="center">
              <Image preview={false} src={logo} width={200} />
              <Space>
                <Link>
                  <TwitterOutlined
                    style={{ fontSize: "26px", color: textColor }}
                  />
                </Link>
                <Link>
                  <LinkedinFilled
                    style={{ fontSize: "26px", color: textColor }}
                  />
                </Link>
                <Link>
                  <FacebookFilled
                    style={{ fontSize: "26px", color: textColor }}
                  />
                </Link>
              </Space>
            </Flex>
          </Col>
          <Col span={24} id="contact">
            <Flex vertical="vertical">
              <Title level={1} style={{ color: titleColor }}>
                Contato
              </Title>
              <Paragraph
                className="large-paragraph"
                style={{ color: `${textColor}90` }}
              >
                <Text className="large-paragraph" style={{ color: textColor }}>
                  Escritório Central:
                </Text>{" "}
                Av. Paulista, 1000, São Paulo, SP
              </Paragraph>
              <Paragraph
                className="large-paragraph"
                style={{ color: `${textColor}90` }}
              >
                <Text className="large-paragraph" style={{ color: textColor }}>
                  Email:
                </Text>{" "}
                contato@greenvolt.com.br
              </Paragraph>
              <Paragraph
                className="large-paragraph"
                style={{ color: `${textColor}90` }}
              >
                <Text className="large-paragraph" style={{ color: textColor }}>
                  Telefone:
                </Text>{" "}
                +55 (11) 23456-7688
              </Paragraph>
            </Flex>
          </Col>
        </Row>
      </Flex>
    </Flex>
  );
}

export default App;
