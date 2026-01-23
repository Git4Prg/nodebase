import { LoginForm } from "@/features/auth/components/login-form";
import { requireUnAuth } from "@/lib/auth-utils";

const Page = async () => {
    await requireUnAuth

    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default Page;

// if the folder name has brackets around it like (auth) then it won't be used in the url