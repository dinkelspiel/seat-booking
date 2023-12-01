import { Component, h } from "preact";

export const SeatSize = 32;

interface ISeatProps {
  occupied: boolean;
  canOverride: boolean;
  id: string;
  selected: boolean;
  label: string;
  angle: number;
  xOffset: number;
  onClick: (id: string) => void;
}

interface ISeatState {
  hovering: boolean;
}

export default class Seat extends Component<ISeatProps, ISeatState> {
  public onClicked = (): void => {
    if (this.props.canOverride || !this.props.occupied) {
      this.props.onClick(this.props.id);
    }
  }

  public render({ id, onClick, occupied, canOverride, selected, label, angle, xOffset }: ISeatProps) {
    return (
      <g transform={`translate(${xOffset},0)`}>
        <rect
          data-id={id}
          data-can-override={canOverride}
          data-occupied={occupied}
          data-selected={selected}
          className={
            [
              "SEATBOOKING-seat",
              occupied && "SEATBOOKING-occupied",
              selected && "SEATBOOKING-selected"
            ]
            .filter(el => typeof el === "string")
            .join(" ")
          }
          width={SeatSize}
          height={SeatSize}
          onClick={this.onClicked}
        />
        <text x="0" y="23" filter="url(#solid)">{ label }</text>
      </g>
    );
  }
}
