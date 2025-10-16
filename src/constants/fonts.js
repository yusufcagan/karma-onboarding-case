export const FONTS = {
  SFPRODISPLAYBOLD: 'SFProDisplay-Bold',
  SFPRODISPLAYMEDIUM: 'SFProDisplay-Medium',
  SFPRODISPLAYREGULAR: 'SFProDisplay-Regular',
  SFPRODISPLAYSEMIBOLDITALIC: 'SFProDisplay-SemiBoldItalic',
};

export const getFontFamily = (type = 'regular') => {
  switch (type.toLowerCase()) {
    case 'bold':
      return FONTS.SFPRODISPLAYBOLD;
    case 'semiBoldItalic':
      return FONTS.SFPRODISPLAYSEMIBOLDITALIC;
    case 'medium':
      return FONTS.SFPRODISPLAYMEDIUM;
    case 'regular':
    default:
      return FONTS.SFPRODISPLAYREGULAR;
  }
};
