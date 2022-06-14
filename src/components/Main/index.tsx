import * as S from './styles'

export function Main({
  title = 'React Avançado',
  description = 'Typescript, ReactJS Nextjs e Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Tittle>{title}</S.Tittle>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para a tela com codigo"
      />
    </S.Wrapper>
  )
}
