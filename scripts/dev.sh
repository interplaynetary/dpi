#!/bin/bash
# Development helper script for Bun

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Free Association Development Server${NC}"
echo ""

# Check if bun is installed
if ! command -v bun &> /dev/null; then
    echo -e "${YELLOW}⚠️  Bun is not installed. Installing...${NC}"
    curl -fsSL https://bun.sh/install | bash
    source ~/.bashrc || source ~/.zshrc || true
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}📦 Installing dependencies...${NC}"
    bun install
fi

# Kill any existing process on port 5000
if lsof -Pi :5000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo -e "${YELLOW}🔄 Stopping existing server on port 5000...${NC}"
    kill -9 $(lsof -ti:5000) 2>/dev/null || true
    sleep 1
fi

# Run type check
echo -e "${BLUE}🔍 Running type check...${NC}"
bun run check
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  Type check failed, but continuing...${NC}"
fi

echo ""
echo -e "${GREEN}✅ Starting development server...${NC}"
echo -e "${BLUE}📍 Server will be available at: http://localhost:5000${NC}"
echo ""

# Start the dev server
bun run dev

