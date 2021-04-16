import { ACTION } from "../_utils/poker-constants";

export class PokerHands {
  hands: string;
  action: ACTION = ACTION.NULL;

  constructor(hands: string) {
    this.hands = hands;
  }
}
