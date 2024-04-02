import Wrapper from "@/components/shared/wrapper";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/use-auth-context";
import logo from "@/assets/Logo.png";
import { Button } from "@/components/ui/button";

const Login = () => {
  const { isAuthenticated } = useAuthContext();

  const loginWithGoogle = () => {
    const loginUrl = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${
      import.meta.env.VITE_HOST_URL
    }`;
    window.location.href = loginUrl;
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header>
        <nav className="border-b border-[#25262B]">
          <Wrapper className="flex h-16 w-full items-center justify-center px-28 py-3">
            <img
              className="h-[24px] w-[157px]"
              src={logo}
              alt="reachinbox logo"
            />
          </Wrapper>
        </nav>
      </header>
      <main>
        <section>
          <Wrapper className="flex h-[calc(100vh_-_6.1rem)] items-center justify-center">
            <div className="h-[312px] w-[460px] space-y-12 rounded-xl border bg-gradient-to-r from-[#111214] to-[#121212] px-10 py-6">
              <div className="h-[103px] w-[380px] space-y-8">
                <h1 className="text-center text-xl font-semibold">
                  Create a new account
                </h1>
                <Button
                  className="h-[48px] w-[380px] rounded-sm border border-[#707172] bg-inherit px-4 py-2 text-base font-normal tracking-tight text-[#CCCCCC] hover:bg-muted"
                  onClick={loginWithGoogle}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <img
                      src="https://api.iconify.design/logos:google-icon.svg"
                      alt="google icon"
                    />
                    <p>Sign Up with Google</p>
                  </div>
                </Button>
              </div>
              <div className="h-[97px] w-[380px] space-y-6 text-center">
                <Button
                  onClick={loginWithGoogle}
                  className="h-[48px] w-[195px] rounded-sm bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] px-9 py-3 text-sm text-white"
                >
                  Create an Account
                </Button>
                <p className="text-base">
                  <span className="text-[#909296]">
                    Already have an account?{" "}
                    <span className="cursor-pointer text-[#C1C2C5] hover:underline">
                      Sign in
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </Wrapper>
        </section>
      </main>
      <footer className="h-8 border-t border-[#25262B] py-2">
        <Wrapper className="flex items-center justify-center">
          <p className="text-xs text-[#5C5F66]">
            © 2023 Reachinbox. All rights reserved.
          </p>
        </Wrapper>
      </footer>
    </>
  );
};

export default Login;
