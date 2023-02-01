import { FC, useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useRouter } from 'next/router'

import { useTranslate } from 'shared/hooks/useTranslate'

import { termsMock } from 'shared/mocks/terms'

import s from './TermsPage.module.scss'
import 'react-tabs/style/react-tabs.css'

export const TermsPage: FC = () => {
  const { query, push } = useRouter()
  const t = useTranslate()

  const [selectedTerm, setSelectedTerm] = useState<number | undefined>(0)

  useEffect(() => {
    setSelectedTerm(Number(query.id))
  }, [query.id])

  return (
    <div className={s.page}>
      <div className={s.pageTitles}>
        <div className={s.title}>{t('terms.title')}</div>
        <div className={s.subTitle}>{t('terms.subtitle')}</div>
      </div>

      <div className={s.container}>
        <Tabs
          selectedIndex={selectedTerm}
          selectedTabClassName={s.selectedTab}
          onSelect={index => {
            push(`/terms/${index}`)
            setSelectedTerm(index)
          }}
          className={s.tabs}
        >
          <TabList className={s.tabList}>
            <Tab className={s.tab}>{t('terms.travelDescription')}</Tab>
            <Tab className={s.tab}>{t('terms.rentalDescription')}</Tab>
            <Tab className={s.tab}>{t('terms.cookiesDescription')}</Tab>
            <Tab className={s.tab}>{t('terms.termsOfUseDescription')}</Tab>
            <Tab className={s.tab}>{t('terms.privacy')}</Tab>
          </TabList>

          <TabPanel className={s.tabPanel}>
            <ol>
              <li>
                <p>Reisebedingungen</p>
              </li>
            </ol>
            <div className={s.blockTitle}>1. Vertrag</div>
            <ol>
              <li>
                <span>1.1.</span> Mit der Entgegennahme Ihrer schriftlichen,
                telefonischen oder persönlichen Buchung kommt zwischen Ihnen und
                Laros Reisen GmbH ein Vertrag zustande, sofern Ihre Buchung ein
                Laros Reisen GmbH Angebot betrifft. Die vorliegenden Allgemeinen
                Vertrags- und Reisebedingungen regeln das Verhältnis zwischen
                Ihnen und Laros Reisen GmbH, wenn Sie direkt mit Laros Reisen
                GmbH einen Vertrag abschliessen. Ihre Buchungsstelle tritt nur
                dann rechtsgültig als Stellvertreterin von Laros Reisen GmbH
                auf, wenn dies im Vertrag und der Reisebestätigung/Rechnung
                ausdrücklich mitgeteilt wird. Andernfalls ist die Buchungsstelle
                Ihre Vertragspartnerin.
              </li>

              <li>
                <span>1.2.</span> Werden Ihnen durch Ihre Buchungsstelle
                Reisearrangements oder Einzelleistungen von anderen
                Reiseveranstaltern oder Dienstleistungsunternehmen vermittelt,
                so gelten deren eigenen Reise- und Vertragsbestimmungen. Bei
                allen von Laros Reisen GmbH vermittelten Flugtickets gelten die
                Allgemeinen Vertrags- und Reisebedingungen der verantwortlichen
                Fluggesellschaften. Laros Reisen GmbH ist in diesen Fällen nicht
                Vertragspartei und Sie können sich daher auch nicht auf die
                Allgemeinen Reise- und Vertragsbedingungen berufen.
              </li>

              <li>
                <span>1.3.</span> Beachten Sie, dass in der Regel unsere
                Leistungen ab Flughafen in der Schweiz und für Schiffsreisen ab
                dem Einschiffungshafen gelten. Wir verweisen auf das jeweilige
                Reiseprogramm. Das rechtzeitige Eintreffen am Abreiseort liegt
                in Ihrer Verantwortung.
              </li>
            </ol>

            <div className={s.blockTitle}>
              2. Preise und Zahlungsbedingungen
            </div>

            <ol>
              <li>
                <p>2.1. Prospektpreise</p>
                Die Preise für die Reisearrangements ergeben sich aus den
                Angeboten auf der Laros Reisen GmbH Website oder individuell
                ausgearbeiteten Angeboten. Die Pauschalpreise unserer
                Arrangements verstehen sich, wenn nichts anderes erwähnt, pro
                Person und Schweizer Franken bei Unterkunft im Doppelzimmer. Bei
                Pauschal- und Baukastenarrangements werden die Preise
                aufenthaltsbezogen berechnet, d. h. gemäss Ihrem effektiven
                Aufenthalt. Alle Preise verstehen sich inklusive der
                gesetzlichen Mehrwertsteuer und sind Barzahlungspreise.
              </li>

              <li>
                <p>2.2 Buchungsgebühren / Reisegarantie</p>
                Bei der Buchung eines «Nur-Landarrangements» (zum Beispiel
                Unterkunft, Transfers, Segeln, Mietwagen, Rundreise) erhebt
                Laros Reisen GmbH eine Buchungsgebühr von CHF 120.– pro Auftrag.
                Zusätzlich wird für die Reise ein Risikobeitrag in Höhe von 2.5
                Promille auf den Reisepreis erhoben. Dieser fliesst an den
                Garantiefonds der Schweizer Reisebranche und dient zur
                Absicherung der Kundengelder.
              </li>

              <li>
                <p>2.3. Beratung, Reservierung, Offerten</p>
                Wir weisen Sie darauf hin, dass Ihre Buchungsstelle, neben den
                im Katalog erwähnten Preisen, zusätzliche Kosten für Beratung,
                Bearbeitung, Offerten etc. erheben kann.
              </li>

              <li>
                <p>2.4. Anzahlung</p>
                Bei der Anmeldung oder spätestens nachdem die schriftliche
                Bestätigung vorliegt, ist eine Anzahlung von CHF 500.- pro
                Person zuzüglich der Kosten für Flugtickets zu leisten. Für die
                Villen und Ferienwohnungen ist eine Anzahlung von 50 % des
                Gesamtbetrages erforderlich. Für die Frühbuchungsrabatte gelten
                zum Teil spezielle Anzahlungsbedingungen. Sie finden diese
                jeweils bei den betreffenden Angeboten auf der Website oder der
                Offerte/Bestätigung.
              </li>

              <li>
                <p>2.5. Restzahlung</p>
                Der Restbetrag ist 30 Tage vor Abreise fällig. Bei kurzfristigen
                Buchungen, d. h. 30 Tage oder weniger vor Abreise, ist der
                gesamte Betrag sofort nach Erhalt der Rechnung zu bezahlen.
                Sofern nichts anderes vereinbart wurde, werden Ihnen die
                Reiseunterlagen nach Eingang Ihrer Zahlung über den ganzen
                Betrag und ca. 14 Tage vor Ihrer Abreise zugestellt.
              </li>

              <li>
                <p>2.6. Verspätete Zahlungen</p>
                Bei nicht fristgerechter Anzahlung oder Restzahlung haben wir
                das Recht, nach erfolglosem Verstreichen einer kurzen Nachfrist,
                entschädigungslos vom Vertrag zurückzutreten und die
                Annullationskosten gemäss Ziffer 3 einzufordern. Eine nicht
                rechtzeitige Zahlung berechtigt uns, die Reiseleistungen zu
                verweigern.
              </li>

              <li>
                <p>2.7. Preisänderungen</p>
                Laros Reisen GmbH behält sich das Recht vor, Prospektangaben,
                Leistungsbeschreibungen und Preise vor Ihrer Buchung zu ändern.
                Laros Reisen GmbH oder Ihre Buchungsstelle würde in diesem Fall
                vor Vertragsabschluss orientieren. In Ausnahmefällen müssen wir
                uns vorbehalten, die in den Laros Reisen GmbH Prospekten und
                Preislisten angegebenen Preise zu erhöhen:
                <ul>
                  <li>
                    Tarifänderungen von Transportunternehmen (z. B. Treibstoff-
                    zuschläge)
                  </li>
                  <li>
                    neu eingeführte oder erhöhte Gebühren und Taxen (z. B.
                    Flughafentaxen)
                  </li>
                  <li>Wechselkursänderungen</li>
                  <li>
                    staatlich verfügte Preiserhöhungen (z. B. Mehrwertsteuer)
                  </li>
                  <li>plausibel erklärte Druckfehler</li>
                </ul>
                Falls Laros Reisen GmbH die im Katalog angegebenen Preise aus
                den oben erwähnten Gründen ändern muss, wird Ihnen diese
                Preiserhöhung bis spätestens 3 Wochen vor Abreise bekannt
                gegeben. Sofern die Preiserhöhung 10 % des ausgeschriebenen und
                von Laros Reisen GmbH bestätigten Pauschalpreises übersteigt,
                haben Sie das Recht, innert 5 Tagen nach Erhalt der Mitteilung
                kostenlos vom Vertrag zurückzutreten. In diesem Fall werden
                Ihnen alle bereits geleisteten Zahlungen innert 30 Tagen
                rückerstattet. Sie können aber stattdessen auch ein anderes von
                Laros Reisen GmbH offeriertes Reisearrangement buchen.
              </li>
            </ol>

            <div className={s.blockTitle}>
              3. Rücktrittsbedingungen und Änderungen
            </div>

            <ol>
              <li>
                Annullierungen und Änderungen nehmen wir ausschliesslich
                schriftlich entgegen. Stornieren Sie die Reise weniger als 45
                Tage vor Reisebeginn oder wollen Sie Änderungen oder eine
                Umbuchung vornehmen, werden zu den Bearbeitungsgebühren von CHF
                90.– pro Person, die nachfolgenden Annullationskosten vom
                gesamten Reisepreis erhoben:
              </li>

              <li>
                <p>3.1. Normale Annullationskosten</p>
              </li>

              <li>45 – 31 Tage vor Reisebeginn 25 % </li>
              <li>30 – 15 Tage vor Reisebeginn 50 %</li>
              <li>14 – 8 Tage vor Reisebeginn 75 %</li>
              <li>7 – 0 Tage vor Reisebeginn, no show 100 %</li>

              <li>
                <p>3.2. Annullationskosten für Flüge, Fähren und Zugtickets</p>
                Flüge, Fähren und Zugtickets unterliegen sehr strengen
                Annullierungs- und Umbuchungsbedingungen. In der Regel können
                sie nicht umgebucht werden und es entstehen ab Buchungszeitpunkt
                100% Spesen.
              </li>
              <li>
                <p>3.3. Verschärfte Annullationskosten</p>
                Für einzelne Reisen oder Leistungen wie zum Beispiel Villen,
                Ferienwohnungen, Schiffe, Fähren, Buchungen mit
                Frühbucherrabatten oder Sonderangeboten in den Hotels gelten
                spezielle Bestimmungen. Diese sind jeweils auf der schriftlichen
                Bestätigung vermerkt. Bei Sonderaktionen, Themenreisen und
                Spezialangeboten: Ab Buchungstag 100 % Bei Gruppenreisen gelten
                spezielle Bestimmungen. Diese sind jeweils auf der Offerte und
                schriftlichen Bestätigung vermerkt.
              </li>
              <li>
                <p>3.4. No-Show</p>
                Bei Nicht- oder zu spätem Erscheinen (No-Show) zum Abflug oder
                für Landleistungen vor Ort werden dem Passagier 100 % des
                Arrangementpreises belastet. Verpasst ein Passagier den Flug, so
                entfällt für Laros Reisen GmbH jede Beförderungspflicht. Dies
                gilt insbesondere für Fälle von Flugplanverschiebungen.
              </li>
              <li>
                <p>3.5. Annullierungs- und Extrarückreisekosten-Versicherung</p>
                Wir empfehlen Ihnen dringend den Abschluss einer Annullierungs-
                und Extrarückreisekostenversicherung, sofern Sie nicht bereits
                privat eine gleichwertige Versicherung abgeschlossen haben.
                Laros Reisen GmbH hat eine Travel Help Desk Versicherung mit
                Allianz Global Assistance.
              </li>
            </ol>

            <div className={s.blockTitle}>
              4. Beanstandungen während der Reise
            </div>

            <ol>
              <li>
                <span>4.1.</span>
                Entspricht die Reise nicht der Beschreibung im Laros Reisen GmbH
                Prospekt oder der Auftragsbestätigung oder ist mit einem
                anderweitig erheblichen Mangel behaftet, so sind Sie
                verpflichtet, bei Laros Reisen GmbH oder der lokalen
                Reiseleitung oder Vertretung unverzügliche und unentgeltliche
                Abhilfe zu verlangen. Sollte Abhilfe nicht möglich sein, müssen
                Sie bei der Reiseleitung oder Vertretung von Laros Reisen GmbH
                vor Ort eine schriftliche Bestätigung verlangen.
              </li>
              <li>
                <span>4.2.</span>
                Falls Laros Reisen GmbH bzw. die örtliche Laros Reisen GmbH
                Reiseleitung / Vertretung nicht spätestens innert 48 Stunden
                eine angemessene Lösung offeriert, können Sie selbst für Abhilfe
                sorgen. Die dadurch entstehenden Kosten werden Ihnen im Rahmen
                der gesetzlichen und vertraglichen Haftung von Laros Reisen GmbH
                gegen Beleg ersetzt. Ist die Fortsetzung der Reise oder der
                Aufenthalt am Ferienort aufgrund schwerwiegender Mängel nicht
                zumutbar, so müssen Sie von der örtlichen Laros Reisen GmbH
                Vertretung oder dem Leistungsträger eine entsprechende
                Bestätigung verlangen. Diese sind verpflichtet, den Sachverhalt
                und Ihre Beanstandungen schriftlich festzuhalten.
              </li>
              <li>
                <span>4.3.</span>
                Ihre Beanstandungen und die Bestätigung der Laros Reisen GmbH
                Reiseleitung bzw. Laros Reisen GmbH Vertretung oder der
                Leistungsträger müssen innerhalb von 14 Tagen nach Rückkehr
                schriftlich bei Laros Reisen GmbH oder Ihrer Buchungsstelle
                eingereicht werden. Falls diese Bedingungen nicht eingehalten
                werden, erlischt jeglicher Schadenersatzanspruch.
              </li>
            </ol>

            <div className={s.blockTitle}>5. Haftung</div>

            <ol>
              <li>
                <p>5.1. Unsere Haftung</p>
                Laros Reisen GmbH entschädigt Sie für den Ausfall oder die
                unrichtige Erbringung vereinbarter Leistungen oder für die Ihnen
                zusätzlich entstandenen Kosten (unter Vorbehalt von Ziff. 6 und
                7), soweit es der Laros Reisen GmbH Reiseleitung oder der
                lokalen Vertretung nicht möglich war, Ihnen vor Ort eine
                gleichwertige Ersatzleistung anzubieten und auch kein eigenes
                Verschulden Ihrerseits vorliegt. Unsere Haftung ist jedoch auf
                den insgesamt zweifachen Reisepreis beschränkt und erfasst nur
                den unmittelbaren Schaden. Keine Haftung können wir übernehmen,
                falls infolge Flugverspätungen oder Streiks Programmänderungen
                erfolgen müssen. Ebenso schliesst unsere Haftung
                Programmänderungen aus, die auf höhere Gewalt, behördliche
                Anordnungen oder Verspätungen von Dritten, für die wir nicht
                einzustehen haben, zurückzuführen sind.
              </li>
              <li>
                <p>5.2. Lokale Veranstaltungen und Ausflüge</p>
                An den meisten Ferienorten ist es möglich, lokale
                Veranstaltungen oder Ausflüge zu buchen. Sie beteiligen sich an
                diesen Veranstaltungen jedoch auf eigene Verantwortung. Laros
                Reisen GmbH kann deshalb für Ausflüge oder Veranstaltungen, die
                Sie direkt am Ferienort buchen, keine Haftung übernehmen.
              </li>
              <li>
                <p>5.3. Personenschäden, Unfälle und Erkrankungen</p>
                Laros Reisen GmbH übernimmt die Haftung für den unmittelbaren
                Schaden bei Tod, Körperverletzung oder Erkrankung während der
                Reise, sofern diese von Laros Reisen GmbH oder einem von Laros
                Reisen GmbH beauftragten Unternehmen (Hotel usw.) schuldhaft
                verursacht wurde. Bei Todesfall, Körperverletzung oder
                Erkrankung, welche Sie im Zusammenhang mit Flugtransporten oder
                mit der Benützung von Transportunternehmen (Bahn, Schiff, Bus)
                erleiden, sind die Entschädigungsansprüche der Höhe nach auf die
                Summen beschränkt, die sich aus den anwendbaren internationalen
                Abkommen oder nationalen Gesetzen ergeben. Eine weiterge- hende
                Haftung von Laros Reisen GmbH ist in diesen Fällen
                ausgeschlossen.
              </li>
              <li>
                <p>5.4. Sicherstellung der Kundengelder</p>
                Laros Reisen GmbH ist Teilnehmer am Garantiefonds der Schweizer
                Reisebranche. Die von Ihnen im Zusammenhang mit der Buchung
                bezahlten Beträge sind damit gemäss Bundesgesetz sichergestellt.
              </li>
            </ol>

            <div className={s.blockTitle}>6. Programm- und Preisänderungen</div>

            <ol>
              <li>
                <span>6.1.</span>
                Laros Reisen GmbH behält sich auch in Ihrem Interesse das Recht
                vor, das Reiseprogramm oder einzeln vereinbarte Leistungen
                (z. B. Unterkunft, Transportart, Transportmittel-Typ, Flugzeiten
                Fluggesellschaften, Ausflüge usw.) zu ändern, wenn
                unvorhergesehene Umstände es erfordern. Laros Reisen GmbH bemüht
                sich, Ihnen gleichwertige Ersatzleistungen anzubieten und
                orientiert Sie so rasch wie möglich über Änderungen und mögliche
                Auswirkungen auf den Preis.
              </li>
              <li>
                <p>6.2. Höhere Gewalt und Streiks</p>
                Laros Reisen GmbH haftet insbesondere nicht für Änderungen im
                Programm, die auf höhere Gewalt (z.B. Naturkatastrophen,
                politische Unruhen, Streik), Pandemie, Epidemie oder behördliche
                Massnahmen und Verspätungen von Dritten, für die Laros Reisen
                GmbH nicht einzustehen hat, zurückzuführen sind.
              </li>
              <li>
                <p>6.3. Preisänderungen nach Vertragsabschluss</p>
                In Ausnahmefällen ist es möglich, dass der vereinbarte Preis
                erhöht werden muss. Preiserhöhungen können sich ergeben durch
                nachträgliche Erhöhung der Beförderungskosten, neu eingeführte
                Abgaben von Gebühren oder Taxen (z.B. Flughafen- oder Ortstaxen)
                sowie staatlich verfügte Preiserhöhungen wie z.B.
                Mehrwertsteuer.
              </li>
              <li>
                <p>
                  6.4. Programmänderungen, Ausfall von Leistungen während der
                  Reise
                </p>
                Müssen Programmänderungen während der Reise vorgenommen werden,
                bemühen wir uns, eine gleichwertige Ersatzleistung anzubieten.
                Sollte das Programm durch die Änderung einen Minderwert
                aufweisen, vergüten wir Ihnen diesen (ausgenommen davon sind
                Fälle von höherer Gewalt). Während der Reise steht Ihnen ein
                Rücktritt nur zu, wenn ein erheblicher Teil der vereinbarten
                Leistung nicht erbracht und keine angemessene Alternative
                geboten werden kann.
              </li>
            </ol>

            <div className={s.blockTitle}>
              7. Reiseabsage durch Laros Reisen GmbH
            </div>

            <ol>
              <li>
                Sollten zwingende Gründe wie höhere Gewalt, Naturkatastrophen,
                Unruhen, Streiks, staatliche Massnahmen usw. die sichere
                Durchführung erheblich erschweren oder verhindern, orientieren
                wir Sie über die Reiseabsage so rasch wie möglich. Wir bemühen
                uns, Ihnen eine gleichwertige Ersatzreise anzubieten. Weitere
                Ansprüche Ihrerseits sind ausgeschlossen
              </li>
            </ol>

            <div className={s.blockTitle}>
              8. Reiseabbruch durch den Reisenden
            </div>

            <ol>
              <li>
                Falls Sie die Reise aus irgendeinem Grund vorzeitig abbrechen
                müssen, kann Ihnen Laros Reisen GmbH den Preis für das
                Reisearrangement und allfällige nicht bezogene Leistungen nicht
                rückerstatten. Mehrkosten wie z.B. der Rücktransport gehen zu
                Ihren Lasten. Müssen Sie die Reise aus zwingenden Gründen
                abbrechen, hilft Ihnen die Laros Reisen GmbH Reiseleitung bzw.
                die lokale Vertretung bei der Organisation Ihrer Rückreise. Wir
                empfehlen Ihnen den Abschluss einer Reise-Assistance
                -Versicherung (siehe 3.5).
              </li>
            </ol>

            <div className={s.blockTitle}>
              9. Einreise-, Zoll-, Devisen und Gesundheitsbestimmungen
            </div>

            <ol>
              <li>
                Sie sind für die Einhaltung der Einreise-, Zoll-, Devisen und
                Gesundheitsvorschriften selber verantwortlich. Für Personen, die
                nicht Bürger der Schweiz oder EU Staaten sind, gibt Ihnen Laros
                Reisen GmbH, Ihre Buchungsstelle oder die diplomatische
                Vertretung Auskunft.
              </li>
              <li>
                Wir machen Sie darauf aufmerksam, dass die Einreisebestimmungen
                kurzfristig ändern können.
              </li>
            </ol>

            <div className={s.blockTitle}>
              10. Flug- und Transportleistungen
            </div>

            <ol>
              <li>
                <p>10.1. Flug- und Fahrplanänderungen</p>
                Unsere Angebote beinhalten Reisen mit Flugzeugen des regulären
                Linienverkehrs sowie Sonderflüge mit schweizerischen und
                ausländischen Fluggesellschaften. Sofern nichts anderes
                angegeben ist, findet der Flug in der Economy- Klasse statt. Mit
                den Reiseunterlagen erhalten Sie die gültigen Flugpläne. Bei
                kurzfristigen Änderungen werden Sie von Laros Reisen GmbH oder
                Ihrer Buchungsstelle informiert. An- und Abreise gelten als
                reine Beförderungstage. Bei Flugplanänderungen am selben An-
                oder Abreisetag können keine Rückerstattungsforderungen gelten
                gemacht werden. Fahrpläne von Fährverbindungen können ändern.
                Mit den Reiseunterlagen erhalten Sie die gültigen Fahrpläne. Bei
                kurzfristigen Änderungen werden Sie von Laros Reisen GmbH, Ihrer
                Buchungsstelle oder vor Ort von der Vertretung informiert. Für
                Verspätungen besteht keine Haftung seitens Laros Reisen GmbH.
              </li>
              <li>
                <p>10.2. Reisegepäck und Sportgeräte</p>
                Die Gepäckbestimmungen sind je nach Fluggesellschaft
                unterschiedlich. In der Regel ist das Freigepäck auf ein 1
                Gepäckstück mit höchstens 20 kg oder 23 kg beschränkt.
                Informationen finden Sie in unseren Reiseunterlagen oder bei
                Ihrer Buchungsstelle. Auf den meisten Flügen ist der Transport
                von Übergepäck und Sportgeräten möglich, jedoch nur bei
                Voranmeldung und gegen Gebühr. Das Handgepäck ist je nach
                Fluggesellschaft auf 5–8 Kilogramm limitiert.
              </li>
              <li>
                <p>10.3. Tiere</p>
                Bei Sonderflügen werden keine Tiere in der Kabine akzeptiert.
                Auf Voranmeldung kann der Transport im Gepäckraum erfolgen,
                wobei Sie für die Miete oder den Kauf des Containers selbst
                verantwortlich sind. Sie tragen selbst Verantwortung für die
                Beschaffung der notwendigen Zeugnisse und Gesundheitszertifikate
                usw. Erfolgt die Reise mit Linienflügen geben wir Ihnen die
                Bedingungen auf Anfrage gerne bekannt.
              </li>
              <li>
                <p>
                  10.4. Sitzplatzreservationen und Zusatzleistungen auf den
                  Flügen
                </p>
                Sitzplatzreservationen und Mahlzeiten können auf Wunsch zum
                Voraus gegen Gebühr gebucht werden. Die Fluggesellschaften
                behalten sich vor, gemachte Sitzplatzreservationen, wenn nötig,
                zu ändern.
              </li>
              <li>
                <p>10.5. Verspätungen</p>
                Auch bei sorgfältiger Planung können wir die Einhaltung von
                Flugplänen nicht garantieren und dafür haften. Wir empfehlen
                Ihnen, bei der Reiseplanung mögliche Verspätungen zu
                berücksichtigen.
              </li>
              <li>
                <p>10.6. Mahlzeiten auf den Flügen</p>
                Auf den meisten Flügen sind Essen und Getränke nicht mehr
                eingeschlossen und müssen direkt an Bord in Schweizer Franken
                oder lokaler Währung bezahlt werden.
              </li>
            </ol>

            <div className={s.blockTitle}>11. Mietwagen </div>

            <ol>
              <li>
                Bei den Mietwagenbuchungen bei Laros Reisen GmbH profitieren Sie
                von einem Ausschluss des Selbstbehaltes (Ausnahme Mietwagen
                Kreta). Für eine Rückerstattung nach der Reise benötigen wir
                schriftliche Unterlagen. Bitte beachten Sie, dass bei der
                Übernahme längere Wartezeiten entstehen können.{' '}
              </li>
              <li>
                Mit der Vorabregistrierung bieten wir eine beschleunigte
                Fahrzeugübernahme an. Ihre Buchungsstelle oder Laros Reisen GmbH
                gibt Ihnen gerne Auskunft. Wir weisen ausdrücklich auf mögliche
                Altersbeschränkungen bei Mietwagenpartnern hin, bitte beachten
                Sie die Hinweise auf der Bestätigung und den Reiseunterlagen.{' '}
              </li>
            </ol>

            <div className={s.blockTitle}>12. Datenschutz</div>

            <ol>
              <li>
                <p>12.1. Sammlung von Informationen</p>
                Für Laros Reisen GmbH ist der Schutz der Privatsphäre und der
                persönlichen Daten von grosser Wichtigkeit. Wir halten uns bei
                der Beschaffung und Nutzung von Personendaten an die
                Bestimmungen der schweizerischen Datenschutzgesetzgebung. Wenn
                Sie eine Reisebuchung tätigen, werden neben Ihren Kontaktangaben
                zusätzlich folgende Informationen gespei- chert: Reisedaten,
                Reiseroute/Destination, Fluggesellschaft, Hotel, Preis,
                Kundenwünsche, Informationen über Ihre Mitreisenden,
                Geburtsdatum, Nationalität, Sprache, Präferenzen etc. sowie
                andere Informationen, die Sie uns zur Verfügung stellen.
              </li>
              <li>
                <p>12.2. Weitergabe an Dritte</p>
                Ihre Daten können unter Einhaltung der datenschutzrechtlichen
                Bestimmungen an Dritte weitergegeben werden. Leistungsträger wie
                z.B. Hotels, Airlines und Partneragenturen vor Ort benötigen
                Kundendaten, um die Reise durchführen zu können. Zudem können
                Leistungsträger vor Ort aufgrund lokaler gesetzlicher
                Bestimmungen verpflichtet sein, Kundendaten an die Behörden
                weiterzuleiten. Sie nehmen zur Kenntnis, dass diese Daten an
                Länder übermittelt werden können, in denen der Datenschutz nicht
                dem Schutzniveau der schweizerischen Datenschutzgesetzgebung
                entspricht.
              </li>
              <li>
                <p>12.3. Verwendung der Daten</p>
                Die gesammelten Daten werden nach Treu und Glauben bearbeitet
                und zur Geschäftsabwicklung verwendet. Sie können auch zur
                Bereitstellung eines marktgerechten Angebotes sowie zu Analyse-,
                Marketing- und Beratungszwecken genutzt werden. Laros Reisen
                GmbH ist berechtigt, Ihre Adressdaten zu aktualisieren bzw. bei
                Dritten aktualisieren zu lassen. Selbstverständlich können Sie
                die Zusendung von Informationen jederzeit ablehnen. Wenden Sie
                sich dazu bitte an an Laros Reisen GmbH.
              </li>
              <li>
                <p>12.4. Persönlichkeitsprofil</p>
                Wir weisen Sie darauf hin, dass die Zusammenstellung der
                erhobenen Daten ein vom Schweizer Datenschutzgesetz so genanntes
                «Persönlichkeitsprofil» darstellen kann. Ein
                Persönlichkeitsprofil besteht, wenn die Zusammenstellung der
                Daten die Beurteilung wesentlicher Aspekte Ihrer Per sönlichkeit
                erlaubt. Laros Reisen GmbH AG ist Inhaber der Datensammlung und
                kann die Daten an Dritte weitergeben, welche diese im Rahmen
                eines Auftragsverhältnisses für Laros Reisen GmbH bearbeiten,
                wobei auch ein Datentransfer ins Ausland erfolgen kann. Durch
                Ihre Buchung erteilen Sie Laros Reisen GmbH auch Ihre
                ausdrückliche Einwilligung zur Bearbeitung eines allfälligen
                Persönlichkeitsprofils im Rahmen der obengenannten Ziffern.
              </li>
            </ol>

            <div className={s.blockTitle}>13. Ombudsmann</div>

            <ol>
              <li>
                Vor einer gerichtlichen Auseinandersetzung können Sie die
                Kontroll- und Schlichtungsstelle der Schweizer Reisebranche
                anrufen. Der Ombudsmann strebt bei jeder Art von Problemen
                zwischen Ihnen und Laros Reisen GmbH eine faire und ausgewogene
                Einigung an. Die Adresse des Ombudsmanns lautet: Ombudsmann der
                Schweizer Reisebranche,
              </li>
              <li>Etzelstr. 42, Postfach, 8038 Zürich. </li>
              <li>Informationen unter www.ombudsman-touristik.ch</li>
            </ol>

            <div className={s.blockTitle}>14. Verjährung</div>
            <ol>
              <li>
                Schadenersatzforderungen gegen Laros Reisen GmbH gleichgültig
                aus welchem Grund, verjähren innert einem Jahr. Die
                Verjährungsfrist beginnt an dem auf das Ende des gebuchten
                Reisearrangements folgenden Tag.
              </li>
            </ol>

            <div className={s.blockTitle}>
              15. Anwendbares Recht und Gerichtsstand
            </div>

            <ol>
              <li>
                Auf die Rechtsbeziehungen zwischen Ihnen und Laros Reisen GmbH
                ist ausschliesslich schweizerisches Recht anwendbar. Für Klagen
                gegen Laros Reisen GmbH wird als der ausschliessliche
                Gerichtsstand Arlesheim vereinbart.
              </li>
            </ol>

            <div className={s.blockTitle}>16. Redaktionsschluss </div>
            <ol>
              <li>Der Redaktionsschluss erfolgte im November 2022.</li>
              <li>
                Laros Reisen GmbH behält sich Preisänderungen oder Änderung im
                Angebot nach diesem Zeitpunkt vor.{' '}
              </li>
            </ol>
          </TabPanel>

          <TabPanel className={s.tabPanel}>
            <ol>
              <li>
                <p>Griechenland</p>
              </li>
              <li>
                <p>Ausweispapiere und Kreditkarte</p>
                Nationaler Führerschein, gültig seit mindestens einem Jahr
                (internationale Übersetzung nicht nötig).Es wird bei übernahme
                des Mietwagens eine Kaution via Kreditkarte (nur American
                Express, VISA, Mastercard) oder eine Barhinterlegung in Höhe von
                EUR 100 verlangt. Barhinterlegung ist nur möglich, wenn die
                Übernahme und Abgabe zu den Bürozeiten erfolgt. EC-,
                Debit-,Prepaid-Karten und Visa-Elektron-Karten werden nicht
                akzeptiert.
              </li>
              <li>
                An einigen Stationen in Griechenland ist es möglich, gegen einen
                kleinen Aufpreis das Deposit (Kreditkarte oder Barhinterlegung)
                auszuschliessen.
              </li>

              <li></li>
              <li>
                <p>Mindestalter/ Maximumalter/Zusatzfahrer</p>
                Mindestalter für alle Fahrzeuglenker: 23 Jahre , Maximumalter:
                75 Jahre. Gegen die Zahlung einer einmaligen Gebühr in Höhe von
                EUR 15.00/Fahrer zuzüglich lokaler MwSt.kann das
                Mindest/Maximumalter auf 21-22 Jahre herabgesetzt oder auf über
                75 Jahre heraufgesetzt werden. Ein Zusatzfahrer ist gratis.
              </li>

              <li>
                <p>Fahrzeugkategorie</p>
                Es kann immer nur die Kategorie und nie der Wagentyp bestätigt
                werden. Ihre Wünsche werden jedoch nach Möglichkeit
                berücksichtigt.
              </li>

              <li>
                <p>
                  Babysitze ( bis 11 Monate) / Kindersitze (bis 4 Jahre) /
                  Booster (bis 6 Jahre)
                </p>
                Müssen bei der Buchung vorreserviert und vor Ort bezahlt werden
                (3 EUR/Sitz/Tag zuzüglich der lokalen Mehrwertsteuer).
              </li>
              <li>
                <p>Versicherung</p>
                In all unseren Mietwagenpreisen und Fly-and-Drive-Programmen ist
                eine Vollkaskoversicherung, eine KFZ-Diebstahlversicherung (
                gilt nicht für einen Anmietung auf Kreta) und die
                Haftpflichtversicherung bereits eingeschlossen. Reifen-, Glas-
                und Unterbodenschäden sind in der Vollkaskoversicherung
                inklusive (gilt nicht für einen Anmietung auf Kreta). Die
                Personeninsassenversicherung kann vor Ort abgeschlossen werden.
              </li>

              <li>
                <p>Selbstbehalte</p>
                Alle Versicherungen sind ohne Sebstbehalt. ( gilt nicht für eine
                Anmietung auf Kreta. Selbstbehalt Kreta: Bei einem
                selbstverschuldeten Unfall beträgt der Selbstbehalt in den
                Kategorien A/B/C/D EUR 400.00).
              </li>

              <p>Mietdauer</p>

              <li>Ein Miettag entspricht 24 Stunden.</li>

              <li>
                <p>Einwegmieten</p>
                Einwegmieten sind nur auf Anfrage und gegen Zahlung einer Gebühr
                möglich.
              </li>

              <li>
                <p>Eingeschlossene </p>
                In all unseren Mietwagenpreisen sind unlimitierte Kilometer
                eingeschlossen.
              </li>

              <li>
                <p>Spezial-Mietwagenpreis</p>
                Der Spezial-Mietwagenpreis wir nur abgegeben im Zusammenhang mit
                einem Arrangement Flug & Hotel über die ganze Aufenthaltsdauer
                und ab/bis Flughafen und für maximal 2 Wochen. Danach wird der
                normale Mietwagenpreis angewendet.
              </li>

              <li>
                <p>Zypern</p>
                Bitte beachten Sie, dass auf Zypern Linksverkehr herrscht.
              </li>

              <li>
                <p>Ausweispapiere / Kreditkarte / Kaution</p>
                Nationaler Führerschein, gültig seit mindestens{' '}
                <span>einem</span> Jahren (internationale Übersetzung nicht
                nötig).
              </li>
              <li>
                Kaution: In Höhe der ersten Tankfüllung und 250 EUR (EUR 500 für
                folgende Kategorien: DB/DC). Gültige Kreditkarte auf den
                Fahrernamen - <span>ohne Ausnahme</span> - erforderlich. EC-,
                Debit-, Prepaid-Karten und Visa Electron Karten sowie nicht
                geprägte Kreditkarten werden nicht akzeptiert.
              </li>

              <li>
                <p>Mindestalter/ Maximumalter/Zusatzfahrer</p>
                Mindestalter für alle Fahrzeuglenker: 25 Jahre.{' '}
              </li>
              <li>Höchstalter für alle Fahrzeuglenker: 70 Jahre. </li>
              <li>Ein Zusatzfahrer ist inklusive. </li>

              <li>
                <p>Fahrzeugkategorie</p>
                Es kann immer nur die Kategorie und nie der Wagentyp bestätigt
                werden. Ihre Wünsche werden jedoch nach Möglichkeit
                berücksichtigt.
              </li>

              <li>
                <p>
                  Babysitze (bis 11 Monate/bis 9kg) / Kindersitze(bis 3
                  Jahre/9-18kg)
                </p>
                Müssen bei der Buchung vorreserviert und vor Ort bezahlt werden
                (EUR 4.00/Sitz/Tag zuzüglich der lokalen Mehrwertsteuer).
              </li>

              <li>
                <p>GPS</p>
                Nur auf Anfrage und gegen eine Gebühr von EUR 10 pro Tag
                zuzüglich lokaler Steuer.
              </li>

              <li>
                <p>Versicherung</p>
                In all unseren Mietwagenpreisen und Fly-and-Drive-Programmen ist
                eine Vollkaskoversicherung (CDW) mit Rückerstattung der
                Selbstbeteiligung, eine KFZ-Diebstahlversicherung und die
                Haftpflichtversicherung bereits eingeschlossen. Reifen-, Glas-
                und Unterbodenschäden sind in der Vollkaskoversicherung
                inklusive. Die Personeninsassenversicherung kann vor Ort
                abgeschlossen werden.
              </li>

              <li>
                <p>Mietdauer</p>
                Ein Miettag entspricht 24 Stunden.
              </li>

              <li>
                <p>Einwegmieten und Grenzübertritte</p>
                Einwegmieten sind nur auf Anfrage ab 5 Miettagen und gegen
                Zahlung einer Gebühr möglich.
              </li>
              <li>
                Grenzübertritte sind nicht gestattet. Die Einreise in den
                türkischen Teil der Insel ist nicht gestattet.
              </li>

              <li>
                <p>Eingeschlossene Kilometer</p>
                In all unseren Mietwagenpreisen sind unlimitierte Kilometer
                eingeschlossen.
              </li>

              <li>
                <p>Spezial-Mietwagenpreis</p>
                Der Spezial-Mietwagenpreis wir nur abgegeben im Zusammenhang mit
                einem Arrangement Flug & Hotel über die ganze Aufenthaltsdauer
                und ab/bis Flughafen und für maximal 2 Wochen. Danach wird der
                normale Mietwagenpreis angewendet.
              </li>
            </ol>
          </TabPanel>

          <TabPanel className={s.tabPanel}>
            <ol>
              <li>
                <p>Cookie-Richtlinie</p>
              </li>
              <li>
                Unsere Webseite benutzt im Rahmen unseres berechtigten
                Interesses an einem technisch einwandfreien Online Angebot und
                seiner wirtschaftlich-effizienten Gestaltung und Optimierung
                gem. Art.6 Abs. 1 lit.f DSGVO Cookies, damit unser Angebot
                besser, effektiver und sicherer genutzt werden kann. Cookies
                sind Textdateien, die auf Ihrem Computer gespeichert werden und
                bestimmte Daten über ihr Nutzerverhalten auf unserer Seite
                speichern, damit etwa ein ihrer bisherigen Nutzung
                entsprechendes Angebot gemacht werden kann. Dabei kann es sich
                einmal umso genannte `&quot;`Session-Cookies `&quot;` handeln,
                die zum Ende Ihres Besuches auf unserer Webseite automatisch
                gelöscht werden. Es gibt aber auch Cookies, die dauerhaft auf
                Ihrem Computer gespeichert werden, sofern sie diese nicht
                löschen. Dann ist es uns möglich, Ihren Browser beim nächsten
                Aufruf unserer Webseite wieder zu erkennen und ihnen Angebote zu
                machen, die ihrer bisherigen Nutzung unserer Webseite
                entsprechen.
              </li>
              <li>
                Ihr Browser ermöglicht Ihnen, die Verwendung von Cookies ganz
                oder im Einzelfall zu verhindern. Bitte informieren Sie sich
                dazu in der Bedienungsanleitung für ihren Browser. Die Sperrung
                von Cookies kann die Funktion unserer und anderer von ihnen
                besuchter Webseiten einschränken.
              </li>
              <li>
                Die Speicherung von Cookies in Ihrem Browser können Sie
                dauerhaft verhindern, indem sie das anschliessend verlinkte
                Plugin herunterladen und installieren. Hier finden Sie dazu
                nähere Informationen:
              </li>
              <li>
                <a href='https://support.google.com/ads/answer/7395996 '>
                  https://support.google.com/ads/answer/7395996
                </a>
              </li>
              <li>
                Ebenso können Sie die Nutzung von Cookies durch Drittanbieter
                Ihnen gegenüber dadurch verhindern, dass sie auf der
                Deaktivierungsseite der Network Advertising Initiative gemäss
                der dortigen Anleitung ihren Opt-out erklären. Hier finden Sie
                dazu nähere Informationen:{' '}
              </li>
              <li>
                <a href='https://support.google.com/ads/answer/7395996 '>
                  https://support.google.com/ads/answer/7395996{' '}
                </a>
              </li>
              <li>WEITERGABE AN DRITTE</li>
              <li>
                Wir mögen Spam genauso wenig wie Sie. Wir werden daher Ihre
                Daten nicht an Dritte weitergeben, soweit dies nicht gesetzlich
                erlaubt ist.
              </li>
              <li>Eine Weitergabe Ihrer Daten kann entweder</li>
              <li>
                Für die Erfüllung eines Vertrages erforderlich und dann nach
                Art. 6 Abs. 1 lit. b DSGVO erlaubt sein oder
              </li>
              <li>
                Auf Grundlage unseres berechtigten Interesses an einer
                effektiven Leistungsgestaltung gem. Art. 6 Abs. 1 lit. f DSGVO
                erlaubt sein,
              </li>
              <li>
                Von einer von Ihnen erteilten Einwilligung gedeckt sein oder
              </li>
              <li>
                Notwendig werden, wenn wir gem. Art. 6 Abs. 1 lit. c DSGVO von
                einem Staat oder einer Behörde rechtmässig auf Herausgabe Ihrer
                Daten in Anspruch genommen werden.
              </li>
            </ol>
          </TabPanel>

          <TabPanel className={s.tabPanel}>
            <ol>
              <li>
                <p>Nutzungsbedingungen</p>
              </li>
              <li>
                Weiter erheben wir Nutzungsdaten (z.B. Besuche auf der Website,
                Interesse an Produkten), um die Inanspruchnahme der Dienste auf
                unserer Website durch den Nutzer zu ermöglichen und abzurechnen.
              </li>
              <li>
                Eine Zusammenführung von Nutzungsdaten wird von uns nur
                vorgenommen, sofern und soweit dies für Abrechnungszwecke
                erforderlich ist. Ansonsten werden wir Nutzungsdaten nur
                pseudonym erstellen und nur, soweit Sie dem nicht widersprochen
                haben. Diesen Widerspruch können Sie jederzeit an die in dem
                Impressum angegebene Anschrift oder den in dieser
                Datenschutzerklärung genannten Verantwortlichen senden.
              </li>
              <li>
                Rechtsgrundlage für diese Datenverarbeitung sind zum einen
                unsere berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO
                an der Analyse der Website und Ihrer Nutzung, gegebenenfalls
                auch die gesetzliche Erlaubnis zur Speicherung von Daten im
                Rahmen der Anbahnung eines Vertragsverhältnisses gem. Art. 6
                Abs. 1 lit. b DSGVO.
              </li>
              <li>
                Weiter speichert unser Provider bei jeder Nutzung dieser
                Webseite Informationen, die sogenannten Server Log Dateien, die
                automatisch von Ihrem Browser übermittelt werden. Dies sind:
              </li>
              <li>Ihre IP-Adresse</li>
              <li>Typ und Version Ihres Browsers</li>
              <li>Hostname</li>
              <li>Besuchszeitpunkt</li>
              <li>Die Seite, von der aus Sie unsere Seite besucht haben</li>
              <li>Name der aufgerufenen Seite</li>
              <li>Genauer Zeitpunkt des Aufrufes sowie</li>
              <li>Die übertragene Datenmenge</li>
              <li>
                Diese Daten werden nur für statistische Zwecke verwendet und
                ermöglichen uns keine Identifikation von Ihnen als Nutzer.
              </li>
            </ol>
          </TabPanel>

          <TabPanel className={s.tabPanel}>
            <ol>
              <li>
                <p>Datenschutzerklärung</p>
              </li>
              <li>VERANTWORTLICHE STELLE</li>
              <li>
                Wir freuen uns über Ihren Besuch auf unserer Website. Zunächst
                möchten wir uns Ihnen als verantwortliche Stelle im Sinne des
                Datenschutzrechts vorstellen:
              </li>
              <li>Laros Reisen GmbH</li>
              <li>Hauptstrasse 94 4147 Aesch</li>
              <li>Tel: 061 756 80 80</li>
              <li>
                E-Mail : <a href='info@laros.ch'>info@laros.ch</a>
              </li>
              <li>
                Wir möchten Sie in Übereinstimmung mit unserer gesetzlichen
                Verpflichtung über die Erhebung und Verwendung ihrer
                personenbezogenen Daten informieren.
              </li>
            </ol>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
