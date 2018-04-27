export default {
  en: {
    signinTab: {
      title: 'Sign In',
      button: {
        signin: 'Sign In'
      }
    },
    signupTab: {
      title: 'Sign Up',
      button: {
        signup: 'Register'
      }
    },
    placeholders: {
      username: 'Username',
      password: 'Password',
      confirmPassword: 'Confirm password'
    },
    errors: {
      username: {
        empty: 'Username is empty',
        pattern_fail:
          'Username must contain letters (a-z) and numbers (0-9) with a minimum of 6 characters'
      },
      password: {
        empty: 'Password is empty',
        pattern_fail:
          'Password must be at least 8 characters long and contain letters and at least one symbol or number'
      },
      confirmPassword: {
        not_match: 'Confirm password does not match'
      }
    }
  }
};
