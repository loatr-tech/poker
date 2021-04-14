import { ACTION } from "../_utils/poker-constants";

export class PokerHands {
  hands: string;
  action: ACTION = ACTION.FOLD;

  constructor(hands: string) {
    this.hands = hands;
  }
}
