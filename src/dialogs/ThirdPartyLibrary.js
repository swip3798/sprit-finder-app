import React, { } from 'react';
import { Accordion, AccordionSummary, makeStyles, Typography, AccordionDetails, Paper, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    linkButton: {
        padding: "0px",
        position: 'absolute',
        right: "50px",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    text: {
        fontSize: theme.typography.pxToRem(12),
        fontWeight: theme.typography.fontWeightRegular,
    },
    paper: {
        backgroundColor: "#EEE",
        padding: "8px",
    },
    title: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightBold,
        textAlign: "center",
        padding: "8px"
    }
}));

function LicenseItem({ title, websiteURL, ...props }) {
    const classes = useStyles();
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1a-header"
            >
                <Typography className={classes.heading}>{title}</Typography>
                <Button className={classes.linkButton} href={websiteURL} color="primary" component="a" target="_blank" rel="noopener noreferrer">
                    Website
                </Button>
            </AccordionSummary>
            <AccordionDetails>
                <Paper elevation={1} className={classes.paper}>
                    {props.children}
                </Paper>
            </AccordionDetails>
        </Accordion>
    );
}

export default function ThirdPartyLibrary() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>
                Damit SpritFinder funktioniert werden vielen Open-Source-Bibliotheken verwendet. Hier können die Lizenztexte nachgelesen werden.
            </Typography>
            <LicenseItem title="React" websiteURL="https://reactjs.org/">
                <Typography className={classes.text} >
                    MIT License<br />
                    <br />
                    Copyright (c) Facebook, Inc. and its affiliates.<br />
                    <br />
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:<br />
                    <br />
                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the Software.<br />
                    <br />
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.<br />
                </Typography>
            </LicenseItem>
            <LicenseItem title="create-react-app" websiteURL="https://create-react-app.dev/">
                <Typography className={classes.text} >
                    MIT License<br />
                    <br />
                    Copyright (c) 2013-present, Facebook, Inc.<br />
                    <br />
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:<br />
                    <br />
                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the Software.<br />
                    <br />
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.<br />
                </Typography>
            </LicenseItem>
            <LicenseItem title="Material-UI" websiteURL="https://material-ui.com/">
                <Typography className={classes.text} >
                    MIT License<br />
                    <br />
                    Copyright (c) 2014 Call-Em-All<br />
                    <br />
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:<br />
                    <br />
                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the Software.<br />
                    <br />
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.<br />
                </Typography>
            </LicenseItem>
            <LicenseItem title="Leaflet" websiteURL="https://leafletjs.com/">
                <Typography className={classes.text} >
                    Copyright (c) 2010-2021, Vladimir Agafonkin<br />
                    Copyright (c) 2010-2011, CloudMade<br />
                    All rights reserved.<br />
                    <br />
                    Redistribution and use in source and binary forms, with or without modification, are
                    permitted provided that the following conditions are met:<br />
                    <br />
                    1. Redistributions of source code must retain the above copyright notice, this list of
                    conditions and the following disclaimer.<br />
                    <br />
                    2. Redistributions in binary form must reproduce the above copyright notice, this list
                    of conditions and the following disclaimer in the documentation and/or other materials
                    provided with the distribution.<br />
                    <br />
                    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
                    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
                    MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
                    COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
                    EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
                    SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
                    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
                    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
                    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.<br />
                </Typography>
            </LicenseItem>
            <LicenseItem title="React Leaflet" websiteURL="https://react-leaflet.js.org/">
                <Typography className={classes.text} >
                    Copyright 2020 Paul Le Cam and contributors (“Licensor”)<br />
                    <br />
                    Hippocratic License Version Number: 2.1.<br />
                    <br />
                    Purpose. The purpose of this License is for the Licensor named above to permit the Licensee (as defined below) broad permission, if consistent with Human Rights Laws and Human Rights Principles (as each is defined below), to use and work with the Software (as defined below) within the full scope of Licensor’s copyright and patent rights, if any, in the Software, while ensuring attribution and protecting the Licensor from liability.<br />
                    <br />
                    Permission and Conditions. The Licensor grants permission by this license (“License”), free of charge, to the extent of Licensor’s rights under applicable copyright and patent law, to any person or entity (the “Licensee”) obtaining a copy of this software and associated documentation files (the “Software”), to do everything with the Software that would otherwise infringe (i) the Licensor’s copyright in the Software or (ii) any patent claims to the Software that the Licensor can license or becomes able to license, subject to all of the following terms and conditions:
                    <ul>
                        <li>
                            Acceptance. This License is automatically offered to every person and entity subject to its terms and conditions. Licensee accepts this License and agrees to its terms and conditions by taking any action with the Software that, absent this License, would infringe any intellectual property right held by Licensor.
                        </li>
                        <li>
                            Notice. Licensee must ensure that everyone who gets a copy of any part of this Software from Licensee, with or without changes, also receives the License and the above copyright notice (and if included by the Licensor, patent, trademark and attribution notice). Licensee must cause any modified versions of the Software to carry prominent notices stating that Licensee changed the Software. For clarity, although Licensee is free to create modifications of the Software and distribute only the modified portion created by Licensee with additional or different terms, the portion of the Software not modified must be distributed pursuant to this License. If anyone notifies Licensee in writing that Licensee has not complied with this Notice section, Licensee can keep this License by taking all practical steps to comply within 30 days after the notice. If Licensee does not do so, Licensee’s License (and all rights licensed hereunder) shall end immediately.
                        </li>
                        <li>
                            Compliance with Human Rights Principles and Human Rights Laws.
                            <ol>
                                <li>
                                    Human Rights Principles.

                                    (a) Licensee is advised to consult the articles of the United Nations Universal Declaration of Human Rights and the United Nations Global Compact that define recognized principles of international human rights (the “Human Rights Principles”). Licensee shall use the Software in a manner consistent with Human Rights Principles.

                                    (b) Unless the Licensor and Licensee agree otherwise, any dispute, controversy, or claim arising out of or relating to (i) Section 1(a) regarding Human Rights Principles, including the breach of Section 1(a), termination of this License for breach of the Human Rights Principles, or invalidity of Section 1(a) or (ii) a determination of whether any Law is consistent or in conflict with Human Rights Principles pursuant to Section 2, below, shall be settled by arbitration in accordance with the Hague Rules on Business and Human Rights Arbitration (the “Rules”); provided, however, that Licensee may elect not to participate in such arbitration, in which event this License (and all rights licensed hereunder) shall end immediately. The number of arbitrators shall be one unless the Rules require otherwise.

                                    Unless both the Licensor and Licensee agree to the contrary: (1) All documents and information concerning the arbitration shall be public and may be disclosed by any party; (2) The repository referred to under Article 43 of the Rules shall make available to the public in a timely manner all documents concerning the arbitration which are communicated to it, including all submissions of the parties, all evidence admitted into the record of the proceedings, all transcripts or other recordings of hearings and all orders, decisions and awards of the arbitral tribunal, subject only to the arbitral tribunal's powers to take such measures as may be necessary to safeguard the integrity of the arbitral process pursuant to Articles 18, 33, 41 and 42 of the Rules; and (3) Article 26(6) of the Rules shall not apply.
                                </li>
                                <li>
                                    Human Rights Laws. The Software shall not be used by any person or entity for any systems, activities, or other uses that violate any Human Rights Laws. “Human Rights Laws” means any applicable laws, regulations, or rules (collectively, “Laws”) that protect human, civil, labor, privacy, political, environmental, security, economic, due process, or similar rights; provided, however, that such Laws are consistent and not in conflict with Human Rights Principles (a dispute over the consistency or a conflict between Laws and Human Rights Principles shall be determined by arbitration as stated above). Where the Human Rights Laws of more than one jurisdiction are applicable or in conflict with respect to the use of the Software, the Human Rights Laws that are most protective of the individuals or groups harmed shall apply.
                                </li>
                                <li>
                                    Indemnity. Licensee shall hold harmless and indemnify Licensor (and any other contributor) against all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind, including Licensor’s reasonable attorneys’ fees, arising out of or relating to Licensee’s use of the Software in violation of Human Rights Laws or Human Rights Principles.
                                </li>
                            </ol>
                        </li>
                        <li>
                            Failure to Comply. Any failure of Licensee to act according to the terms and conditions of this License is both a breach of the License and an infringement of the intellectual property rights of the Licensor (subject to exceptions under Laws, e.g., fair use). In the event of a breach or infringement, the terms and conditions of this License may be enforced by Licensor under the Laws of any jurisdiction to which Licensee is subject. Licensee also agrees that the Licensor may enforce the terms and conditions of this License against Licensee through specific performance (or similar remedy under Laws) to the extent permitted by Laws. For clarity, except in the event of a breach of this License, infringement, or as otherwise stated in this License, Licensor may not terminate this License with Licensee.
                        </li>
                        <li>
                            Enforceability and Interpretation. If any term or provision of this License is determined to be invalid, illegal, or unenforceable by a court of competent jurisdiction, then such invalidity, illegality, or unenforceability shall not affect any other term or provision of this License or invalidate or render unenforceable such term or provision in any other jurisdiction; provided, however, subject to a court modification pursuant to the immediately following sentence, if any term or provision of this License pertaining to Human Rights Laws or Human Rights Principles is deemed invalid, illegal, or unenforceable against Licensee by a court of competent jurisdiction, all rights in the Software granted to Licensee shall be deemed null and void as between Licensor and Licensee. Upon a determination that any term or provision is invalid, illegal, or unenforceable, to the extent permitted by Laws, the court may modify this License to affect the original purpose that the Software be used in compliance with Human Rights Principles and Human Rights Laws as closely as possible. The language in this License shall be interpreted as to its fair meaning and not strictly for or against any party.
                        </li>
                        <li>
                            Disclaimer. TO THE FULL EXTENT ALLOWED BY LAW, THIS SOFTWARE COMES “AS IS,” WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED, AND LICENSOR AND ANY OTHER CONTRIBUTOR SHALL NOT BE LIABLE TO ANYONE FOR ANY DAMAGES OR OTHER LIABILITY ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THIS LICENSE, UNDER ANY KIND OF LEGAL CLAIM.
                        </li>
                    </ul>
                    <br />
                    This Hippocratic License is an Ethical Source license (https://ethicalsource.dev) and is offered for use by licensors and licensees at their own risk, on an “AS IS” basis, and with no warranties express or implied, to the maximum extent permitted by Laws.
                </Typography>
            </LicenseItem>
            <LicenseItem title="recharts" websiteURL="https://recharts.org/en-US/">
                <Typography className={classes.text} >
                    The MIT License (MIT) <br />
                    <br />
                    Copyright (c) 2015 recharts <br />
                    <br />
                    Permission is hereby granted, free of charge, to any person obtaining a copy <br />
                    of this software and associated documentation files (the "Software"), to deal <br />
                    in the Software without restriction, including without limitation the rights <br />
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell <br />
                    copies of the Software, and to permit persons to whom the Software is <br />
                    furnished to do so, subject to the following conditions: <br />
                    <br />
                    The above copyright notice and this permission notice shall be included in all <br />
                    copies or substantial portions of the Software. <br />
                    <br />
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR <br />
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, <br />
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE <br />
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER <br />
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, <br />
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE <br />
                    SOFTWARE. <br />
                </Typography>
            </LicenseItem>
        </div>
    );
}