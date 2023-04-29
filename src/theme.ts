
interface ITheme {
    colors: Record<string, string>;
    fontSizes: Record<string, string>;
    fontWeight: Record<string, string>;
}

export const theme: ITheme = {
    colors: {
        blue: '#2663FF',
        lightBlue_100:'#6475A1',
        lightBlue_200: '#364261',
        darkBlue: '#071438',
        whiteBlue: '#EFF4FF',
        white:'#fff',
        shadowInfoItem: '1px 1px 4px  rgba(0, 24, 86, 0.08)'
    },

    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '24px',
        xxl: '32px',
    },

    fontWeight: {
        normal: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '800',
    }
}