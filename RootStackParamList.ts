export type AuthStackParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  PasswordScreen: { username: string | undefined };
  SignupScreen: undefined;
  CreatePasswordScreen: { username: string | undefined };
  EmailVerifyScreen: {
    username: string | undefined;
    password: string | undefined;
  };
  OptVerifyScreen: {
    username: string | undefined;
    password: string | undefined;
    mail: string | undefined;
  };
};

export type BottomTabParamList = {
  HomeScreen: undefined;
  DiscoverScreen: undefined;
  ProfileScreen: undefined;
};
