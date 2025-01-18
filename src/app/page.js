import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="bg-[#1a191a] h-screen flex items-center justify-center p-10">
      <div className="grid bg-center grid-cols-1 md:grid-cols-2">
        <Image
          className=" max-lg:rounded-none max-md:rounded-full max-md:mb-7 max-md:w-44 max-md:m-auto "
          src="/logo.jpg"
          alt="Logo"
          width={350}
          height={0}
        />
        <div className="bg-[#16202a]  text-white flex items-center justify-center flex-col max-md:p-5">
          <div className="my-4">
            <h1 className="flex justify-center text-3xl font-semibold">
              Login
            </h1>
            <p className=" mt-2 text-xs text-slate-400">
              lorem impsn lorem lorem pssdpp
            </p>
          </div>

          <form>
            <Button
              className=" flex items-center w-full gap-4 mb-2 px-12 bg-transparent "
              variant="outline"
            >
              <FcGoogle />
              Logar com sua conta google
            </Button>
            <Label htmlFor="email">Email*</Label>
            <Input
              className="mb-2"
              type="email"
              id="email"
              placehouder="Email"
            />
            <Label htmlFor="senha">Senha*</Label>
            <Input type="Password" id="senha" placehouder="Senha" />

            <button type="submit" className="w-full mt-4 bg-[#5d3165]">
              Login
            </button>

            <p className="mt-4 text-xs text-slate-200 flex  justify-center max-md:mb-3">
              @2025 Todos direitos reservados
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
