# Collective Recognition Update

## Summary

Replaced traditional "Use of Funds" pie chart with a **D3 TreeMap** that explains the **collective recognition** funding model, as documented at [playnet.gitbook.io](https://playnet.gitbook.io).

## Changes Made

### 1. New TreeMap Component (`TreeMap.tsx`)
- **Technology:** D3.js treemap layout
- **Features:**
  - Hierarchical rectangular visualization
  - Animated entrance with staggered delays
  - Hover effects for interactivity
  - Responsive sizing
  - Shows percentages and descriptions
  - Color-coded categories

### 2. Updated Investment Section
**Before:** Traditional budget breakdown (Security 40%, AI 30%, etc.)

**After:** Collective recognition allocation model

#### New Content Structure:
```
Collective Recognition for Fund Distribution
├── Technical Contributors (35%)
├── Coordination & Design (25%)
├── Research & Documentation (20%)
├── Community Building (15%)
└── Operations (5%)
```

#### Explanation Added:
- **No centralized budget** - Members recognize contributions that enable their growth
- **Mutual recognition** - Members establish recognition percentages mutually
- **Proportional allocation** - Based on recognition shares, not winner-takes-all
- **Distributed coordination** - Multiple lenses show priorities from different perspectives

#### Documentation Link:
Direct link to [Collective Recognition docs](https://playnet.gitbook.io/docs/collective-recognition) with detailed explanation

### 3. Updated Footer
Added **Documentation** link as first item in Resources section pointing to https://playnet.gitbook.io

## Key Concepts from Documentation

From the [Playnet documentation](https://playnet.gitbook.io/docs/collective-recognition):

### How Collective Recognition Works

1. **Members submit needs** via free-association interface
   - Slot-based with time/location/quantity specifics
   - Fulfillment tracking

2. **Members recognize contributions** 
   - Each member recognizes others' contributions towards their self-actualization
   - Mutual recognition establishes percentages

3. **Members declare capacities**
   - Slot-based, mirroring need structure
   - Multiple availability slots with constraints
   - Only actual provider's capacity matters for real allocation

4. **Protocol computes collective-recognition-shares**
   - For each capacity declaration
   - All members can see shares for any declared capacity
   - Enables distributed coordination

5. **Providers allocate**
   - **Proportional** to recognition shares (not greedy/first-come)
   - Compliance filters applied (KYC, sanctions, jurisdiction)
   - Multi-pass redistribution for fairness

### Advantages

- ✅ No centralized definition of meaningful contribution
- ✅ Distributed determination of value
- ✅ Multiple lenses for viewing allocation priorities
- ✅ Provider reality check - only real providers allocate
- ✅ **Proportional & fair** - everyone gets their share
- ✅ Slot-based matching with temporal & spatial awareness
- ✅ Multi-pass optimization for maximum utilization

## Technical Implementation

### TreeMap Visualization
```typescript
interface TreeMapNode {
  name: string;
  value: number;        // Recognition percentage
  description?: string; // Category description
  color: string;       // Visual coding
}
```

### Animation Sequence
1. **0-800ms:** Rectangles fade in
2. **400-1000ms:** Category names appear
3. **600-1200ms:** Percentages appear
4. **800-1400ms:** Descriptions appear (if space allows)

### Responsive Design
- Full width on mobile
- Grid layout on desktop
- TreeMap adjusts to container size
- Text scales based on available space

## Links to Documentation

### Primary Resources
- **Main Docs:** https://playnet.gitbook.io
- **Collective Recognition:** https://playnet.gitbook.io/docs/collective-recognition

### Available in Site
1. **Investment Section:** "Learn More About Collective Recognition" button
2. **Footer:** "Documentation" link in Resources section

## Files Modified

### New Files
- `client/src/components/TreeMap.tsx` - D3 treemap visualization

### Modified Files
- `client/src/components/InvestmentSection.tsx`
  - Replaced PieChart with TreeMap
  - Updated content to explain collective recognition
  - Added documentation link
  - Updated allocation categories
  
- `client/src/components/Footer.tsx`
  - Added Documentation link to Resources section

## Testing

✅ **Type Check:** Passing  
✅ **Linter:** No errors  
✅ **Dev Server:** Running successfully  
✅ **Build:** Compatible with Bun  
✅ **Links:** All external links verified

## Philosophy Alignment

This update better reflects Playnet's actual governance model:

**Traditional Budgets:** Fixed categories determined in advance  
**Collective Recognition:** Emergent allocation based on genuine mutual enabling relationships

The treemap visualization represents how recognition flows through different types of contributions, while the explanation clarifies that these percentages emerge organically from the network rather than being predetermined.

## Visual Comparison

### Before: Pie Chart
- Implied fixed budget allocations
- Traditional organizational thinking
- Static percentage breakdown

### After: TreeMap
- Shows emergent recognition patterns
- Reflects distributed coordination
- Dynamic, organic allocation model
- Links to full documentation

## Next Steps

The collective recognition system is now:
- ✅ Visually represented with TreeMap
- ✅ Conceptually explained in Investment section
- ✅ Linked to comprehensive documentation
- ✅ Accessible from footer resources

Future enhancements could include:
- Real-time recognition data visualization
- Interactive capacity/need slot matching
- Member recognition graph visualization
- Temporal patterns of allocation

---

**Last Updated:** October 31, 2025  
**Documentation:** https://playnet.gitbook.io/docs/collective-recognition

