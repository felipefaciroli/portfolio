import { useRef } from 'react';

import * as Styled from './styles';

import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, A11y, Pagination } from 'swiper';
import useWindowDimensions from '../../hook/useDimensions';
import { useSnackbar } from 'notistack';
import axios from 'axios';

import { Github } from '@styled-icons/boxicons-logos/Github';
const Video = '/assets/videos/video.mp4';
const Foto = '/assets/images/felipe.jpg';

import { Base } from '../Base';
import Input from '../../components/Input';

import { skils } from './data.json';

SwiperCore.use([Navigation, Autoplay, A11y, Pagination]);

interface FormData {
  name: string;
  email: string;
  telephone: number;
  subject: string;
  description: string;
}

function Home() {
  const { enqueueSnackbar } = useSnackbar();
  const { width } = useWindowDimensions();
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = async ({ name, email, telephone, subject, description }) => {
    try {
      const { data } = await axios.post('/api/send-email', {
        name,
        email,
        telephone,
        subject,
        description
      })

      enqueueSnackbar('Menssagem enviada com sucesso!', {
        variant: 'success'
      })
    } catch (error) {
      enqueueSnackbar('Erro ao enviar a menssagem, tente mais tarde!', {
        variant: 'error'
      })
      console.log(error)
    }

  }

  return (
    <Base>
      <Styled.Hometop>
        <Styled.About id="about">
          <Styled.AboutCard>
            <div className="profile">
              <img src={Foto} alt="Felipe Faciroli - Desenvolvedor Front-end Sênior" />
            </div>
            <div className="inf">
              <h1>Felipe Faciroli</h1>
              <h2>Desenvolvedor Front-end Sênior</h2>
              <a href="https://github.com/felipefaciroli" target="_blank">
                <Github />
                <span>felipefaciroli</span>
              </a>
            </div>
          </Styled.AboutCard>
          <p>Atuo com <strong>Tecnologia</strong> a mais de <strong>12 anos</strong>, tenho uma vasta experiência com programação dentro de grandes empresas.</p>
          <p>Atualmente trabalho como <strong>Desenvolvedor Especialista VTEX</strong> na <strong>Agência Corebiz</strong>, cuidando especialmente dos projetos de implantação VTEX IO para o <strong>Grupo SOMA (<a href="https://www.bynv.com.br" target="_blank">BYNV</a>)</strong>.</p>
          <p>Procuro sempre me atualizar as novas tecnologias e melhores práticas de codificação utilizada no mercado de tecnologia, além de ter uma grande experiência com <strong>e-commerce</strong> e <strong>marketing</strong>.</p>
        </Styled.About>
        <video muted autoPlay loop poster="">
          <source src={Video} type="video/mp4" />
        </video>
      </Styled.Hometop>

      <Styled.Skils id="skils">
        <h3>Meus Conhecimentos</h3>

        {skils.length > 0 && (
          <Swiper
            slidesPerView={width < 1360 ? 2.6 : 5}
            spaceBetween={23}
            loop={true}
            autoplay={{ disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="skils"
          >
            {skils?.map((skil, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="cardSkil">
                    <img src={skil.logo} alt={skil.name} />
                    <h4>{skil.name}</h4>
                  </div>
                </SwiperSlide>
              )
            })}

          </Swiper>
        )}
      </Styled.Skils>

      <Styled.FormContact id="contact">
        <h3>Posso te ajudar?</h3>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name='name' label='Seu nome' required={true} />
          <Input name='email' label='Seu melhor e-mail' required={true} type="email" />
          <Input name='telephone' label='Telefone' required={true} type="tel" />
          <Input name='subject' label='Assunto' required={true} />
          <Input name='description' label='Mensagem' required={true} />

          <button>Enviar contato</button>
        </Form>
      </Styled.FormContact>
    </Base>
  );
}

export default Home;
