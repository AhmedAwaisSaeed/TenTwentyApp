# Navigation Structure

This project uses React Navigation v6 with a bottom tabs navigation pattern.

## Structure

```
src/navigation/
├── AppNavigator.tsx          # Main navigation container with bottom tabs
├── stacks/                   # Individual stack navigators for each tab
│   ├── DashboardStack.tsx    # Dashboard tab stack
│   ├── WatchStack.tsx        # Watch tab stack
│   ├── MediaLibraryStack.tsx # Media Library tab stack
│   ├── MoreStack.tsx         # More tab stack
│   └── index.ts              # Exports all stacks
└── README.md                 # This file
```

## Features

### Bottom Tabs Navigation
- **Custom Tab Bar**: Pixel-perfect design matching the provided image
- **SVG Icons**: Using the provided SVG icons from `src/assets/icons/`
- **Theme Integration**: Uses centralized color theme from `src/shared/theme/colors.ts`
- **Font Integration**: Uses Poppins font family for labels

### Tab Structure1*Dashboard**: Main dashboard screen
2. **Watch**: Video/movie watching section
3**Media Library**: User's media collection
4. **More**: Additional options and settings

### Design Specifications
- **Background Color**: `#1F12 (Dark purple-grey)
- **Active Tab Color**: `#FFFFFF` (White)
- **Inactive Tab Color**: `#82788(Grey)
- **Tab Bar Height**: 80px
- **Rounded Corners**: Top-left and top-right (20px radius)
- **Font**: Poppins (Regular for inactive, Bold for active)

## Usage

### Adding New Screens to a Stack
```typescript
// In any stack file (e.g., WatchStack.tsx)
import NewScreen from '../path/to/NewScreen';

const Stack = createStackNavigator();

const WatchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="WatchMain" 
        component={WatchScreen}
        options=[object Object][object Object]          title: Watch,
          headerStyle: {
            backgroundColor: COLORS.PRIMARY,
          },
          headerTintColor: COLORS.TEXT_PRIMARY,
          headerTitleStyle: [object Object]        fontFamily: 'Poppins-Bold',
          },
        }}
      />
      <Stack.Screen 
        name="NewScreen" 
        component={NewScreen}
        options=[object Object][object Object]          title: 'New Screen',
        }}
      />
    </Stack.Navigator>
  );
};
```

### Navigation Between Screens
```typescript
// Navigate to a screen within the same stack
navigation.navigate('NewScreen');

// Navigate to a different tab
navigation.navigate('Dashboard');
```

### Customizing Tab Bar
The custom tab bar component is located at `src/shared/components/CustomTabBar.tsx`. 
You can modify colors, spacing, and styling there.

## Dependencies

- `@react-navigation/native`
- `@react-navigation/bottom-tabs`
- `@react-navigation/stack`
- `react-native-screens`
- `react-native-safe-area-context`
- `react-native-svg`
- `react-native-svg-transformer`

## Setup Notes
1 **Metro Config**: Configured to handle SVG files
2*TypeScript**: SVG type declarations added
3. **Theme**: Centralized color management
4**Fonts**: Poppins font family integrated 