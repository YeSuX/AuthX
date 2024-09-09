import CardWrapper from "./card-wrapper"

const LoginForm = () => {
  return (
    <CardWrapper headerLabel="Welcome back" backButtonLabel="Don't have an account?" backButtonLink="/auth/register">
      <div>LoginForm</div>
    </CardWrapper>
  )
}
export default LoginForm