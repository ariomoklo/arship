import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import anime from "animejs";
import { motion } from "framer-motion";

export interface LayoutProps extends React.HTMLAttributes<HTMLButtonElement> {
  pageTitle: string
  pageDesc: string
  redirectOnUnAuth?: string
}

export const LoaderAnimation: React.FC = () => {
  useEffect(() => {
    anime ({
      targets: 'div.box',
      translateY: [
          {value: 50, duration: 300},
          {value: -50, duration: 300},
          {value: 0, duration: 300},
      ],
      rotate: {
        value: '1turn',
      },
      borderRadius: [5, 50, 5],
      direction: 'alternate',
      easing: 'easeInOutQuad',
      delay: function(_, i) {
        if (i == 0 || i == 2) return 100;
        return 0
      },
      autoplay: true,
      loop: true,
      elasticity: 100
    });
  }, [])

  return (
    <div id="boxes" className="text-center">
      <div className="box mt-[50px] relative w-8 h-8 m-[4px] inline-block bg-primary-400"></div>
      <div className="box mt-[50px] relative w-8 h-8 m-[4px] inline-block bg-base-700"></div>
      <div className="box mt-[50px] relative w-8 h-8 m-[4px] inline-block bg-base-400"></div>
      <div className="box mt-[50px] relative w-8 h-8 m-[4px] inline-block bg-primary-700"></div>
    </div>
  )
}

export const Loader = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 2 }}
      className="grow grid place-items-center w-full min-h-[70vh] h-full"
    >
      <LoaderAnimation />
    </motion.main>
  )
}

export const Layout: React.FC<LayoutProps> = ({ pageTitle, pageDesc, className, children }) => {
  return <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
    </Head>

    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className={ className ? className : "grow flex flex-col"}
    >
      { children }
    </motion.main>
  </>
};

export const PrivateLayout: React.FC<LayoutProps> = ({ pageTitle, pageDesc, redirectOnUnAuth, className, children }) => {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      const next = router.query?.next ?? redirectOnUnAuth ?? "/"
      router.push(next as string)
    },
  })

  const title = `Arship: ${pageTitle}`

  if (status === "loading") {
    return <Loader />
  }

  return (
    <Layout pageTitle={title} pageDesc={pageDesc} className={`content w-full ${className}`}>
      { children }
    </Layout>
  )
};