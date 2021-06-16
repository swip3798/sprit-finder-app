import React, { } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import ProviderData from './ProviderData';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(1),
        overflow: "auto"
    },
    heading1: {
        fontSize: theme.typography.pxToRem(24),
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(1)
    },
    heading2: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(1)
    },
    text: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: theme.typography.fontWeightRegular,
        marginBottom: theme.spacing(1)
    },
    title: {
        fontSize: theme.typography.pxToRem(32),
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(1)
    }
}));

export default function Imprint() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Impressum</Typography>
            <Typography className={classes.heading1}>Angaben gemäß § 5 TMG</Typography>
            <Typography className={classes.text}>
                {ProviderData.fullName}<br />
                {ProviderData.street}<br />
                {ProviderData.zipCodeCity}<br />
            </Typography>
            <Typography className={classes.heading1}>Kontakt</Typography>
            <Typography className={classes.text}>
                Telefon: {ProviderData.phoneNumber}<br />
                E-Mail: {ProviderData.email}<br />
            </Typography>
            <Typography className={classes.heading2}>Haftung für Inhalte</Typography>
            <Typography className={classes.text}>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br />
                <br />
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </Typography>
            <Typography className={classes.heading2}>Haftung für Links</Typography>
            <Typography className={classes.text}>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.<br />
                <br />
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </Typography>
        </div>
    );
}