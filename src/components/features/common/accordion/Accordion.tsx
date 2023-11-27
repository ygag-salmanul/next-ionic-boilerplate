import styles from "./Accordion.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
const Accordions = () => {
  return (
    <div className={`${styles["content"]} wrapper landing-accordion`}>
      <div className="">
        <p className={styles["content-p"]}>#All the help you need</p>
        <h3 className={styles["content-main"]}>We know you are curious!</h3>
      </div>
      <div className="">
        <div className={styles["accordion-wrapper"]}>
          <Accordion className={styles["accordion"]}>
            <AccordionSummary expandIcon={<AddIcon fontSize="large" />}>
              <Typography fontSize={16} height={32}>
                Where can I use my Nakheel Mall Gift Card?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={14}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles["accordion"]}>
            <AccordionSummary expandIcon={<AddIcon fontSize="large" />}>
              <Typography fontSize={16}>
                How can I purchase a Nakheel Mall Gift Card?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={14} lineHeight={1.5}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded className={styles["accordion"]}>
            <AccordionSummary expandIcon={<AddIcon fontSize="large" />}>
              <Typography fontSize={16}>
                How do I activate my Nakheel Mall Gift Card?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={14} lineHeight={1.5}>
                To activate your Nakheel Mall Gift Card, follow these simple
                steps:
                <ul>
                  <li>
                    Visit our website and register for our cardholder portal, if
                    you haven't already.
                  </li>
                  <li>
                    Log in to your cardholder portal account and navigate to the
                    activation section.
                  </li>
                  <li>
                    Enter the necessary details, including the unique code found
                    on the card.
                  </li>
                  <li>
                    Once the activation is complete, your gift card is ready to
                    use for a delightful shopping and dining experience at
                    Nakheel Mall
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles["accordion"]}>
            <AccordionSummary expandIcon={<AddIcon fontSize="large" />}>
              <Typography fontSize={16} lineHeight={1.5}>
                How can I check the balance on my Gift Card?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={14}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <p className={styles["content-faq-primary"]}>
          Still have questions?
          <span className={styles["content-faq"]}>
            {" "}
            &nbsp; Visit the FAQ page
          </span>
        </p>
      </div>
    </div>
  );
};
export default Accordions;
