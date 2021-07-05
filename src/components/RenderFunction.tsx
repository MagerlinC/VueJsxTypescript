import { defineComponent, ref, PropType } from "vue";
import { Piece } from "../types/Piece";

const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default defineComponent({
  props: {
    pieces: {
      required: true,
      type: Array as PropType<Piece[]>,
    },
  },
  setup(props) {
    const selectedPiece: any = ref(null);
    const spinTheWheel = () => {
      const rndInt: number = randomIntFromInterval(0, props.pieces.length);
      selectedPiece.value = props.pieces[rndInt];
    };
    return { selectedPiece, spinTheWheel };
  },

  render() {
    return (
      <div>
        <button onClick={this.spinTheWheel}>Spin the Wheel!</button>
        {this.selectedPiece && this.selectedPiece.value ? (
          <div class="selected-piece">You got: {this.selectedPiece.name}!</div>
        ) : (
          <div class="piece-selection">
            {!this.selectedPiece && (
              <div class="piece-list">
                {this.pieces.map((piece) => (
                  <div class="piece">{piece.name}</div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
});
