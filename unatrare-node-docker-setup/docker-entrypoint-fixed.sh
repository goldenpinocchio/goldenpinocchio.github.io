#!/bin/bash
# UNATRARE Node Docker entrypoint
# Copy this file into the root of the UNATRARE node repo as: docker-entrypoint.sh

set -e

if [ -z "$BTC_ADDRESS" ]; then
  echo ""
  echo "UNATRARE NODE CONFIG ERROR"
  echo "BTC_ADDRESS is required. Add it to your .env file."
  echo "Example: BTC_ADDRESS=bc1..."
  echo ""
  exit 1
fi

echo ""
echo "UNATRARE NODE STARTING"
echo "BTC:     $BTC_ADDRESS"
echo "XCP:     ${XCP_ADDRESS:-not provided}"
echo "TAP:     ${TAP_ADDRESS:-not provided}"
echo "Stores:  /data/stores/"
echo "App:     /app"
echo ""

# Run from the app folder because the normal docs use: pear run .
cd /app

# Build the command as an array so optional values are handled safely.
PEAR_CMD=(
  pear run .
  --peer-store-name unatrare-node
  --peer-stores-directory /data/stores/
  --msb-stores-directory /data/stores/
  --subnet-bootstrap 38a1b001756148f3f96f8cff7bd38d2924669f5c1880b4f779512d6449cfff56
  --btc-address "$BTC_ADDRESS"
)

if [ -n "$XCP_ADDRESS" ]; then
  PEAR_CMD+=(--xcp-address "$XCP_ADDRESS")
fi

if [ -n "$TAP_ADDRESS" ]; then
  PEAR_CMD+=(--tap-address "$TAP_ADDRESS")
fi

# exec lets Docker stop the node cleanly with SIGTERM.
exec "${PEAR_CMD[@]}"
