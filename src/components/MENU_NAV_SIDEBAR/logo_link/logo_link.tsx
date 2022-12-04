import * as S from './S.logo_link'
import { Heading } from '../../Heading'
import Link from 'next/link'
import { motion } from 'framer-motion'

export type logoLinkProps = {
  text: string
  srcImg?: string
  link: string
  newTab?: boolean
}

export const LogoLink = ({
  text,
  srcImg = '',
  link = '',
  newTab = false,
}: logoLinkProps) => {
  const isNextLink = link.match(/^\//)
    ? true
    : false
  const target = newTab ? '_blank' : '_self'
  // if (isNextLink) {
  return (
    <Heading size='small' uppercase>
      <Link
        href={'/'}
        passHref
        target={target}
        legacyBehavior
      >
        <S.Main href={'/'}>
          <S.LogoContainer>
            <motion.img
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: 'linear',
              }}
              src={'/logo/only_cubo.svg'}
              style={{
                position: 'absolute',
                width: '9rem',
                bottom: '70px',
                left: '30px',
              }}
            ></motion.img>
            <S.Logo
              src={
                '/logo/all_logo_whiout_cubo.svg'
              }
              alt={text}
            />
          </S.LogoContainer>
        </S.Main>
      </Link>
    </Heading>
  )
}
