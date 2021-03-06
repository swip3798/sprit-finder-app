import React, { } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import "./PrivacyNotice.css";
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
    },
    deleteLink: {
        textDecoration: "underline"
    }

}));

export default function PrivacyNotice({onLocalStorageClear}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Hinweis</Typography>
            <Typography className={classes.text}>
                Spritfinder speichert die letzte Position der Karte auf der nach Spritpreisen gesucht wurde, um die Karte beim nächsten Aufruf der App auf diese Position einzustellen. Dafür verwendet es den <a href="https://www.w3schools.com/html/html5_webstorage.asp" rel="nofollow noopener noreferrer" target="_blank">HTML5 Local Storage</a>. Diese Information wird ausschließlich auf Ihrem Gerät gespeichert und nicht an uns oder Dritte übermittelt. Falls Sie dennoch den Speicher leeren möchten, <a href="/" className={classes.deleteLink} onClick={onLocalStorageClear}>können Sie hier klicken, um den Speicher zu leeren.</a>
            </Typography>
            <Typography className={classes.title}>Datenschutzerklärung</Typography>
            <Typography className={classes.text}>
                Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:<br />
                <br />
                {ProviderData.fullName}<br />
                {ProviderData.street}<br />
                {ProviderData.zipCodeCity}<br />
                {ProviderData.email}
            </Typography>
            <Typography className={classes.heading1}>Ihre Betroffenenrechte</Typography>
            <Typography className={classes.text} component="div">
                Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
                <ul>
                    <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
                    <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
                    <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
                    <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
                    <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
                    <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
                </ul>
                <p>
                    Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                </p>
                <p>
                    Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.
                </p>
                <p>
                    Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a
                        href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank"
                        rel="nofollow noopener noreferrer">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.
                </p>
            </Typography>
            <Typography className={classes.heading1}>Erfassung allgemeiner Informationen beim Besuch unserer Website</Typography>
            <Typography className={classes.heading2}>Art und Zweck der Verarbeitung:</Typography>
            <Typography className={classes.text} component="div">
                <p>Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches. </p>
                <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
                <ul>
                    <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
                    <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
                    <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                    <li>zur Optimierung unserer Website.</li>
                </ul>
                <p>
                    Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von  uns
                    ggfs. anonymisiert statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu
                    optimieren.
                </p>
            </Typography>
            <Typography className={classes.heading2}>Rechtsgrundlage und berechtigtes Interesse:</Typography>
            <Typography className={classes.text} component="div"><p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.</p></Typography>
            <Typography className={classes.heading2}>Empfänger:</Typography>
            <Typography className={classes.text} component="div"><p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.</p></Typography>
            <Typography className={classes.heading2}>Speicherdauer:</Typography>
            <Typography className={classes.text} component="div">
                <p>
                    Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Website dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.
                </p>
            </Typography>
            <Typography className={classes.heading2}>Bereitstellung vorgeschrieben oder erforderlich:</Typography>
            <Typography className={classes.text} component="div">
                <p>
                    Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen.
                </p>
            </Typography>
            <Typography className={classes.heading1}>Verwendung von Scriptbibliotheken (Google Webfonts, OpenStreetMap, Tankerkönig, Photon)</Typography>
            <Typography className={classes.heading2}>Google Webfonts</Typography>
            <Typography className={classes.text} component="div">
                <p>
                    Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.
                </p>
                <p>
                    Weitere Informationen zu Google Web Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" rel="noopener nofollow noreferrer" target="_blank">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://www.google.com/policies/privacy/" rel="noopener nofollow noreferrer" target="_blank">https://www.google.com/policies/privacy/</a>.
                </p>
            </Typography>
            <Typography className={classes.heading2}>OpenStreetMap</Typography>
            <Typography className={classes.text} component="div">
                <p>
                    Um die Karte auf unserer Seite zu betreiben verwenden wir "OpenStreetMap" der OpenStreetMap Foundation (OSMF).
                </p>
                <p>
                    Weitere Informationen zu OpenStreetMap finden Sie unter <a href="https://www.openstreetmap.org/about" rel="noopener nofollow noreferrer" target="_blank">https://www.openstreetmap.org/about</a>.
                </p>
            </Typography>
            <Typography className={classes.heading2}>Tankerkönig</Typography>
            <Typography className={classes.text} component="div">
                <p>
                    Um aktuelle Preise von Tankstellen abzufragen, verwenden wir auf dieser Website die „Tankerkönig-API“ der Tankerkönig UG (Niederhöfen 5, 87484 Nesselwang).
                </p>
                <p>
                    Weitere Informationen zur Tankerkönig-API finden Sie unter <a href="https://creativecommons.tankerkoenig.de/" rel="noopener nofollow noreferrer" target="_blank">https://creativecommons.tankerkoenig.de/</a>.
                </p>
            </Typography>
            <Typography className={classes.heading2}>Photon</Typography>
            <Typography className={classes.text} component="div">
                <p>
                    Um die Suchleiste unsere Website zu betreiben, verwenden wir auf dieser Website die „Photon-API“ der komoot GmbH (Friedrich-Wilhelm-Boelcke-Straße 2, 14473 Potsdam, nachfolgend „kommot“).
                </p>
                <p>
                    Weitere Informationen zur Tankerkönig-API finden Sie unter <a href="https://photon.komoot.io/" rel="noopener nofollow noreferrer" target="_blank">https://photon.komoot.io/</a> und in der Datenschutzerklärung von komoot: <a href="https://www.komoot.de/privacy" rel="noopener nofollow noreferrer" target="_blank">https://www.komoot.de/privacy</a>.
                </p>
            </Typography>
        </div>
    );
}