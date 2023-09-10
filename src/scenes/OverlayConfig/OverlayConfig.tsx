import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OverlayInfoContext } from "../../contexts/OverlayInfoContext";
import {
  OverlayConfigHeading,
  OverlayConfigLabel,
  OverlayConfigSubheading,
  OverlayConfigSubmit,
  OverlayConfigTextInput,
  OverlayConfigWrapper,
} from "./OverlayConfig.style";

export const OverlayConfig = () => {
  const { overlayInfo, setOverlayInfo } = useContext(OverlayInfoContext);
  const navigate = useNavigate();

  const handleURLChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isBlue: boolean
  ) => {
    isBlue
      ? setOverlayInfo({
          ...overlayInfo,
          blue: { ...overlayInfo.blue, avatar: event.target.value },
        })
      : setOverlayInfo({
          ...overlayInfo,
          orange: { ...overlayInfo.orange, avatar: event.target.value },
        });
  };

  const handlePrimaryColorChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isBlue: boolean
  ) => {
    isBlue
      ? setOverlayInfo({
          ...overlayInfo,
          blue: { ...overlayInfo.blue, primary: event.target.value },
        })
      : setOverlayInfo({
          ...overlayInfo,
          orange: { ...overlayInfo.orange, primary: event.target.value },
        });
  };

  const handleSecondaryColorChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isBlue: boolean
  ) => {
    isBlue
      ? setOverlayInfo({
          ...overlayInfo,
          blue: { ...overlayInfo.blue, secondary: event.target.value },
        })
      : setOverlayInfo({
          ...overlayInfo,
          orange: { ...overlayInfo.orange, secondary: event.target.value },
        });
  };

  const handleAbbreviationChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isBlue: boolean
  ) => {
    isBlue
      ? setOverlayInfo({
          ...overlayInfo,
          blue: { ...overlayInfo.blue, abbreviation: event.target.value },
        })
      : setOverlayInfo({
          ...overlayInfo,
          orange: { ...overlayInfo.orange, abbreviation: event.target.value },
        });
  };

  const handleSeriesLengthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const seriesLength = Number(event.target.value);
    if (!isNaN(seriesLength) && seriesLength > -1) {
      setOverlayInfo({
        ...overlayInfo,
        seriesLength: seriesLength,
      });
    }
  };

  // True = Bad | False = Good
  const validateInputs = (): boolean => {
    return (
      overlayInfo.blue.abbreviation === "" ||
      overlayInfo.orange.abbreviation === "" ||
      overlayInfo.blue.avatar === "" ||
      overlayInfo.orange.avatar === "" ||
      overlayInfo.seriesLength < 0
    );
  };

  return (
    <>
      <OverlayConfigHeading>UMN RL Overlay</OverlayConfigHeading>
      <OverlayConfigWrapper>
        <div style={{ marginRight: "16px" }}>
          <OverlayConfigSubheading>Blue Team</OverlayConfigSubheading>
          <OverlayConfigLabel>Abbreviation:</OverlayConfigLabel>
          <OverlayConfigTextInput
            type="text"
            id="blue_abbreviation"
            name="blue_abbreviation"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleAbbreviationChange(e, true)
            }
          />
          <br />
          <br />
          <OverlayConfigLabel>
            Primary Color {"(Hex format)"}:
          </OverlayConfigLabel>
          <OverlayConfigTextInput
            type="text"
            id="blue_primary"
            name="blue_primary"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePrimaryColorChange(e, true)
            }
          />
          <br />
          <br />
          <OverlayConfigLabel>
            Secondary Color {"(Hex format)"}:
          </OverlayConfigLabel>
          <OverlayConfigTextInput
            type="text"
            id="blue_secondary"
            name="blue_secondary"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSecondaryColorChange(e, true)
            }
          />
          <br />
          <br />
          <OverlayConfigLabel>Logo URL:</OverlayConfigLabel>
          <OverlayConfigTextInput
            type="url"
            id="blue_url"
            name="blue_url"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleURLChange(e, true)
            }
          />
          <br />
          <br />
          <OverlayConfigLabel>Series Length:</OverlayConfigLabel>
          <OverlayConfigTextInput
            type="number"
            id="series_length"
            name="series_length"
            onChange={handleSeriesLengthChange}
          />
        </div>
        <div style={{ marginLeft: "16px" }}>
          <OverlayConfigSubheading>Orange Team</OverlayConfigSubheading>
          <OverlayConfigLabel>Abbreviation:</OverlayConfigLabel>
          <OverlayConfigTextInput
            type="text"
            id="orange_abbreviation"
            name="orange_abbreviation"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleAbbreviationChange(e, false)
            }
          />
          <br />
          <br />
          <OverlayConfigLabel>
            Primary Color {"(Hex format)"}:
          </OverlayConfigLabel>
          <OverlayConfigTextInput
            type="text"
            id="orange_primary"
            name="orange_primary"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePrimaryColorChange(e, false)
            }
          />
          <br />
          <br />
          <OverlayConfigLabel>
            Secondary Color {"(Hex format)"}:
          </OverlayConfigLabel>
          <OverlayConfigTextInput
            type="text"
            id="orange_secondary"
            name="orange_secondary"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSecondaryColorChange(e, false)
            }
          />
          <br />
          <br />
          <OverlayConfigLabel>Logo URL:</OverlayConfigLabel>
          <OverlayConfigTextInput
            type="url"
            id="orange_url"
            name="orange_url"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleURLChange(e, false)
            }
          />
          <br />
          <br />
          <OverlayConfigSubmit
            disabled={validateInputs()}
            onClick={() => {
              navigate("/overlay");
            }}
          >
            Submit
          </OverlayConfigSubmit>
        </div>
      </OverlayConfigWrapper>
    </>
  );
};
