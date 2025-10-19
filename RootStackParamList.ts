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
  HomeStack: undefined;
  DiscoverStack: undefined;
  ProfileStack: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  GeneratingScreen: { image: string };
  ResultScreen: { image: string };
  SettingsScreen: undefined;
};

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  ProfileEditScreen: undefined;
};
export type DiscoverStackParamList = {
  DiscoverScreen: undefined;
  SettingsScreen: undefined;
};
