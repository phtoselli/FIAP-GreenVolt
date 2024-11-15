import "./index.css";

import { Button, Card, Col, Divider, Flex, Image, List, Row, Space } from "antd";

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

import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";
import icon5 from "./assets/icon5.svg";
import icon6 from "./assets/icon6.svg";

import quote1 from "./assets/quote1.svg";
import quote2 from "./assets/quote2.svg";

import { FacebookFilled, LinkedinFilled, TwitterOutlined } from "@ant-design/icons";
import person1 from "./assets/person1.png";
import person2 from "./assets/person2.png";
import person3 from "./assets/person3.png";

function App() {
	const containersMaxWidth = 800;
	const textColor = "#ffffff";
	const titleColor = "#6CCF9B";

	return (
		<Flex vertical="vertical" align="center" justify="center">
			{/* ------------------ CABECALHO ------------------------- */}
			<Flex
				align="center"
				justify="space-between"
				style={{
					padding: "16px",
					width: "100%",
					borderBottom: "2px solid #ffffff05",
				}}
			>
				<Image preview="none" src={logo} width={150} />
				<Flex gap={16}>
					<Link href="#home">Início</Link>
					<Link href="#gamification">Gamificação</Link>
					<Link href="#share">Compartilhamento</Link>
					<Link href="#advantages">Vantagens</Link>
					<Link href="#testimonial">Testemunhos</Link>
					<Link href="#about">Sobre</Link>
					<Link href="#contact">Contato</Link>
				</Flex>
			</Flex>

			{/* ------------------ HERO  ------------------------- */}
			<Flex
				align="center"
				justify="center"
				style={{
					maxWidth: containersMaxWidth,
					width: containersMaxWidth,
					padding: "80px 0px",
				}}
			>
				<Row>
					<Col span={12}>
						<Flex
							align="flex-start"
							justify="center"
							vertical="vertical"
							style={{ padding: "16px" }}
						>
							<Title level={2} style={{ color: textColor }}>
								Economia de Energia e Sustentabilidade ao Seu Alcance
							</Title>
							<Paragraph style={{ color: textColor, opacity: "0.5" }}>
								Conecte, economize e compartilhe energia de forma inteligente
								com o nosso aplicativo.
							</Paragraph>
							<Button type="primary" size="large">
								Baixe o App
							</Button>
						</Flex>
					</Col>
					<Col span={12}>
						<Flex align="center" justify="center">
							<Image preview="false" src={hero} width={220} />
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
					padding: "80px 0px",
				}}
			>
				<Row>
					<Col span={24}>
						<Flex
							vertical="vertical"
							align="flex-start"
							justify="center"
							style={{ padding: "40px 0px" }}
						>
							<Title
								level={3}
								style={{ color: titleColor, textTransform: "uppercase" }}
							>
								Problema
							</Title>
							<Paragraph style={{ color: `${textColor}90` }}>
								Por que a <Image preview="false" src={name} width={80} /> é
								essencial?
							</Paragraph>
						</Flex>
					</Col>
					<Col span={12}>
						<Image preview="false" src={problem} width={250} />
					</Col>
					<Col span={12}>
						<Flex align="center" justify="center" style={{ padding: "24px" }}>
							<Paragraph style={{ color: `${textColor}90` }}>
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
					<Col span={24}>
						<Row>
							<Col span={8} style={{ padding: "24px" }}>
								<Flex vertical="vertical" align="flex-start" justify="center">
									<Image preview="false" src={icon1} width={25} />
									<Paragraph style={{ color: textColor }}>
										Falta de controle sobre o consumo doméstico:
									</Paragraph>
									<Paragraph style={{ color: `${textColor}90` }}>
										Entenda quais aparelhos mais consomem energia e como eles se
										comparam a um padrão global.
									</Paragraph>
								</Flex>
							</Col>
							<Col span={8} style={{ padding: "24px" }}>
								<Flex vertical="vertical" align="flex-start" justify="center">
									<Image preview="false" src={icon2} width={25} />
									<Paragraph style={{ color: textColor }}>
										Conscientização em relação ao desperdício de energia
									</Paragraph>
									<Paragraph style={{ color: `${textColor}90` }}>
										Acompanhe o uso de cada aparelho em tempo real e identifique
										onde é possível economizar.
									</Paragraph>
								</Flex>
							</Col>
							<Col span={8} style={{ padding: "24px" }}>
								<Flex vertical="vertical" align="flex-start" justify="center">
									<Image preview="false" src={icon3} width={25} />
									<Paragraph style={{ color: textColor }}>
										Dificuldade em acompanhar a geração própria de energia
									</Paragraph>
									<Paragraph style={{ color: `${textColor}90` }}>
										Se você já possui placas solares, monitore em tempo real o
										quanto está gerando e economizando.
									</Paragraph>
								</Flex>
							</Col>
						</Row>
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
					padding: "80px 0px",
				}}
			>
				<Row>
					<Col span={24}>
						<Flex
							vertical="vertical"
							align="flex-start"
							justify="center"
							style={{ padding: "40px 0px" }}
						>
							<Title
								level={3}
								style={{ color: titleColor, textTransform: "uppercase" }}
							>
								Gameficação
							</Title>
							<Paragraph style={{ color: textColor }}>
								Economize Energia de Forma Divertida e Interativa
							</Paragraph>
						</Flex>
					</Col>
					<Col span={12}>
						<Flex align="center" justify="center" style={{ padding: "24px" }}>
							<Paragraph style={{ color: `${textColor}90` }}>
								O GreenVolt utiliza gamificação para ajudar você a economizar
								energia, ao mesmo tempo em que promove a conscientização sobre o
								consumo sustentável. Através de dispositivos IoT e Inteligência
								Artificial, nosso aplicativo monitora o uso dos seus aparelhos e
								compara seus hábitos com padrões globais. Economize pontos,
								desbloqueie conquistas e desafie-se a consumir menos!
							</Paragraph>
						</Flex>
					</Col>
					<Col span={12}>
						<Image preview="false" src={gamification} width={250} />
					</Col>
					<Col span={24}>
						<Row>
							<Col span={8} style={{ padding: "24px" }}>
								<Flex vertical="vertical" align="flex-start" justify="center">
									<Image preview="false" src={icon1} width={25} />
									<Paragraph style={{ color: textColor }}>
										Análise em Tempo Real:
									</Paragraph>
									<Paragraph style={{ color: `${textColor}90` }}>
										Dispositivos inteligentes que acompanham o consumo de cada
										aparelho.
									</Paragraph>
								</Flex>
							</Col>
							<Col span={8} style={{ padding: "24px" }}>
								<Flex vertical="vertical" align="flex-start" justify="center">
									<Image preview="false" src={icon2} width={25} />
									<Paragraph style={{ color: textColor }}>
										Benchmarking Global
									</Paragraph>
									<Paragraph style={{ color: `${textColor}90` }}>
										Veja como seu consumo se compara ao de outras residências no
										mundo.
									</Paragraph>
								</Flex>
							</Col>
							<Col span={8} style={{ padding: "24px" }}>
								<Flex vertical="vertical" align="flex-start" justify="center">
									<Image preview="false" src={icon3} width={25} />
									<Paragraph style={{ color: textColor }}>
										Pontuação e Conquistas:
									</Paragraph>
									<Paragraph style={{ color: `${textColor}90` }}>
										Cada economia de energia se transforma em pontos, que você
										pode usar para desbloquear recompensas e aumentar seu
										impacto ambiental.
									</Paragraph>
								</Flex>
							</Col>
						</Row>
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
					padding: "80px 0px",
				}}
			>
				<Row>
					<Col span={24}>
						<Flex
							vertical="vertical"
							align="flex-start"
							justify="center"
							style={{ padding: "40px 0px" }}
						>
							<Title
								level={3}
								style={{ color: titleColor, textTransform: "uppercase" }}
							>
								Compartilhamento
							</Title>
							<Paragraph style={{ color: textColor }}>
								Acompanhe a Energia que Você Gera e Compartilhe com a Rede
							</Paragraph>
						</Flex>
					</Col>
					<Col span={12}>
						<Image preview="false" src={share} width={250} />
					</Col>
					<Col span={12}>
						<Flex
							vertical="vertical"
							align="flex-start"
							justify="center"
							style={{ padding: "24px" }}
						>
							<Paragraph style={{ color: `${textColor}90` }}>
								Para quem já investiu em placas solares, o GreenVolt oferece um
								monitoramento completo da geração de energia e do impacto
								financeiro dessa produção. Além disso, incentivamos o
								compartilhamento de energia com a rede, permitindo que você
								contribua com a comunidade e visualize os benefícios de sua
								geração em relação ao consumo doméstico.
							</Paragraph>
							<Button type="primary">Baixe o App</Button>
						</Flex>
					</Col>
					<Col span={24}>
						<Row>
							<Col span={8} style={{ padding: "24px" }}>
								<Flex vertical="vertical" align="flex-start" justify="center">
									<Image preview="false" src={icon1} width={25} />
									<Paragraph style={{ color: textColor }}>
										Monitoramento de Geração Solar
									</Paragraph>
									<Paragraph style={{ color: `${textColor}90` }}>
										Acompanhe a energia gerada e quanto dela está compensando
										seus gastos.
									</Paragraph>
								</Flex>
							</Col>
							<Col span={8} style={{ padding: "24px" }}>
								<Flex vertical="vertical" align="flex-start" justify="center">
									<Image preview="false" src={icon2} width={25} />
									<Paragraph style={{ color: textColor }}>
										Controle de Ganhos e Consumo:
									</Paragraph>
									<Paragraph style={{ color: `${textColor}90` }}>
										Veja os resultados financeiros da energia gerada e o impacto
										na sua conta.
									</Paragraph>
								</Flex>
							</Col>
							<Col span={8} style={{ padding: "24px" }}>
								<Flex vertical="vertical" align="flex-start" justify="center">
									<Image preview="false" src={icon3} width={25} />
									<Paragraph style={{ color: textColor }}>
										Incentivo ao Compartilhamento de Energia:
									</Paragraph>
									<Paragraph style={{ color: `${textColor}90` }}>
										Estimule a comunidade com o compartilhamento do excedente de
										energia.
									</Paragraph>
								</Flex>
							</Col>
						</Row>
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
					padding: "80px 0px",
				}}
			>
				<Row>
					<Col span={24}>
						<Flex
							vertical="vertical"
							align="flex-start"
							justify="center"
							style={{ padding: "40px 0px" }}
						>
							<Title
								level={3}
								style={{ color: titleColor, textTransform: "uppercase" }}
							>
								Vantagens
							</Title>
							<Paragraph style={{ color: textColor }}>
								Faremos a diferença na sua vida!
							</Paragraph>
						</Flex>
					</Col>
					<Col span={24}>
						<Row justify="center" gutter={24}>
							<Col span={8} style={{ padding: "16px" }}>
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
									<Paragraph style={{ width: "100%", color: textColor }}>
										01
									</Paragraph>
									<Image preview="false" src={icon4} width={50} />
									<Paragraph style={{ color: textColor, textAlign: "center" }}>
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
							<Col span={8} style={{ padding: "16px" }}>
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
									<Paragraph style={{ width: "100%", color: textColor }}>
										02
									</Paragraph>
									<Image preview="false" src={icon5} width={50} />
									<Paragraph style={{ color: textColor, textAlign: "center" }}>
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
							<Col span={8} style={{ padding: "16px" }}>
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
									<Paragraph style={{ width: "100%", color: textColor }}>
										03
									</Paragraph>
									<Image preview="false" src={icon6} width={50} />
									<Paragraph style={{ color: textColor, textAlign: "center" }}>
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
							<Col span={8} style={{ padding: "16px" }}>
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
									<Paragraph style={{ width: "100%", color: textColor }}>
										04
									</Paragraph>
									<Image preview="false" src={icon5} width={50} />
									<Paragraph style={{ color: textColor, textAlign: "center" }}>
										Integração com IoT e IA
									</Paragraph>
									<Paragraph
										style={{ color: `${textColor}90`, textAlign: "center" }}
									>
										Tecnologia avançada para simplificar o consumo energético.
									</Paragraph>
								</Flex>
							</Col>
							<Col span={8} style={{ padding: "16px" }}>
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
									<Paragraph style={{ width: "100%", color: textColor }}>
										05
									</Paragraph>
									<Image preview="false" src={icon5} width={50} />
									<Paragraph style={{ color: textColor, textAlign: "center" }}>
										Simples e Acessível
									</Paragraph>
									<Paragraph
										style={{ color: `${textColor}90`, textAlign: "center" }}
									>
										Cadastre-se facilmente pelo app e comece a monitorar em
										poucos passos.
									</Paragraph>
								</Flex>
							</Col>
							<Col span={24}>
								<Flex align="center" justify="center">
									<Button type="primary" size="large">
										Baixe o App
									</Button>
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
					padding: "80px 0px",
				}}
			>
				<Row>
					<Col span={24}>
						<Title style={{ textAlign: "center", color: titleColor }}>
							<Image preview="false" src={quote1} width={30} /> Testemunhos dos
							clientes <Image preview="false" src={quote2} width={30} />
						</Title>
						<Paragraph style={{ textAlign: "center", color: `${textColor}90` }}>
							O que Nossos Usuários Dizem?
						</Paragraph>
					</Col>
					<Col span={24}>
						<Row gutter={24}>
							<Col span={8} style={{ padding: "24px" }}>
								<Card
									hoverable
									style={{
										width: 240,
										height: "100%",
										background: "none",
										border: "none",
									}}
									cover={<img alt="example" src={person1} />}
								>
									<Meta
										title={<Paragraph style={{color: textColor}}>Carlos, São Paulo</Paragraph>}
										description={<Paragraph style={{color: `${textColor}90`}}>&quot;Com o GreenVolt, consegui reduzir em 20% minha conta de luz e ainda ajudar o meio ambiente.&quot;</Paragraph>}
									/>
								</Card>
							</Col>
							<Col span={8} style={{ padding: "24px" }}>
								<Card
									hoverable
									style={{
										width: 240,
										height: "100%",
										background: "none",
										border: "none",
									}}
									cover={<img alt="example" src={person2} />}
								>
									<Meta
										title={<Paragraph style={{color: textColor}}>Joana, Belo Horizonte</Paragraph>}
										description={<Paragraph style={{color: `${textColor}90`}}>&quot;Agora entendo o consumo de cada aparelho da minha casa, e o app me ajudou a economizar mais do que eu imaginava.&quot;</Paragraph>}
									/>
								</Card>
							</Col>
							<Col span={8} style={{ padding: "24px" }}>
								<Card
									hoverable
									style={{
										width: 240,
										height: "100%",
										background: "none",
										border: "none",
									}}
									cover={<img alt="example" src={person3} />}
								>
									<Meta
										title={<Paragraph style={{color: textColor}}>Fernanda, Rio de Janeiro</Paragraph>}
										description={<Paragraph style={{color: `${textColor}90`}}>&quot;É muito satisfatório acompanhar a energia que eu gero e compartilho com a rede. A gamificação torna tudo mais divertido!&quot;</Paragraph>}
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
					padding: "80px 0px",
				}}
			>
				<Row>
					<Col span={24}>
						<Flex
							vertical="vertical"
							align="flex-start"
							justify="center"
							style={{ padding: "40px 0px" }}
						>
							<Title
								level={3}
								style={{ color: titleColor, textTransform: "uppercase" }}
							>
								Sobre nós
							</Title>
							<Paragraph style={{ color: textColor }}>Quem somos?</Paragraph>
						</Flex>
					</Col>
					<Col span={12}>
						<Flex align="center" justify="center" style={{ padding: "24px" }}>
							<Paragraph style={{ color: `${textColor}90` }}>
								Queremos ser o app de energia sustentável mais usado no Brasil,
								ajudando a criar um futuro mais verde para todos. O GreenVolt
								nasceu do sonho de 5 estudantes da FIAP, que se uniram para
								transformar o consumo energético e promover a sustentabilidade.
								Em 2024, lançaram o primeiro protótipo e, desde então, o projeto
								cresceu e impactou milhares de residências no Brasil. Nossa
								missão é clara: empoderar as pessoas para consumir energia de
								forma consciente e sustentável, enquanto aproveitam o melhor da
								tecnologia.
							</Paragraph>
						</Flex>
					</Col>
					<Col span={12}>
						<Image preview="false" src={about} width={250} />
					</Col>
					<Divider style={{borderColor: '#ffffff20'}} />
          {/* ----------------- ONDE ATUAMOS -------------- */}
					<Col span={24}>
						<Flex
							vertical="vertical"
							align="flex-start"
							justify="center"
							style={{ padding: "40px 0px" }}
						>
							<Title level={4} style={{ color: textColor }}>
								Onde atuamos?
							</Title>
							<Paragraph style={{ color: textColor }}>
								Nosso principal escritório sede está localizado na Av. Paulista,
								1.000, São Paulo/SP, mas atendemos clientes em diversas regiões
								para levar energia sustentável a cada vez mais brasileiros.
							</Paragraph>
						</Flex>
					</Col>
					<Col span={8}>
						<Image preview="false" src={brasil} width={250} />
					</Col>
					<Col span={16}>
						<Flex
							vertical="vertical"
							align="center"
							justify="center"
							style={{ padding: "24px" }}
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
								<Col span={12}>
									<List
										dataSource={[
											"São Paulo, SP",
											"Rio de Janeiro, RJ",
											"Belo Horizonte, MG",
											"Porto Alegre, RS",
											"Curitiba, PR",
											"Salvador, BA",
										]}
										renderItem={(item) => (
											<Paragraph style={{ color: textColor }}>{item}</Paragraph>
										)}
									/>
								</Col>
								<Col span={12}>
									<List
										dataSource={[
											"Brasília, DF",
											"Fortaleza, CE",
											"Recife, PE",
											"Manaus, AM",
											"Uberlândia, MG",
											"Florianópolis, SC",
										]}
										renderItem={(item) => (
											<Paragraph style={{ color: textColor }}>{item}</Paragraph>
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
					padding: "80px 0px",
				}}
			>
        <Row style={{width: '100%'}} gutter={[0, 80]}>
          <Col span={24}>
            <Flex justify="space-between" align="center">
              <Image preview="false" src={logo} width={200}/>
              <Space>
                <Link>
                  <TwitterOutlined />
                </Link>
                <Link>
                  <LinkedinFilled />
                </Link>
                <Link>
                  <FacebookFilled />
                </Link>
              </Space>
            </Flex>
          </Col>
          <Col span={12}>
            <Flex vertical="vertical">
              <Title level={3} style={{color: titleColor}}>Contato</Title>
              <Paragraph style={{color: `${textColor}90`}}><Text style={{color: textColor}}>Escritório Central:</Text> Av. Paulista, 1000, São Paulo, SP</Paragraph>
              <Paragraph style={{color: `${textColor}90`}}><Text style={{color: textColor}}>Email:</Text> contato@greenvolt.com.br</Paragraph>
              <Paragraph style={{color: `${textColor}90`}}><Text style={{color: textColor}}>Telefone:</Text> +55 (11) 23456-7688</Paragraph>
            </Flex>
          </Col>
        </Row>
      </Flex>
		</Flex>
	);
}

export default App;
